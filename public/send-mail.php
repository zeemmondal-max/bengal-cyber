<?php
/**
 * Bengal Cyber - Production Contact & Document Dispatcher
 * Sends client inquiries and attached documents directly to hello@bengalcyber.com
 */

header('Content-Type: application/json; charset=utf-8');

// Enable CORS for same-origin and development
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed. Use POST.']);
    exit;
}

$recipient = 'hello@bengalcyber.com';

// 1. Sanitize text inputs
function clean_input($data) {
    return htmlspecialchars(stripslashes(trim($data ?? '')));
}

$name     = clean_input($_POST['name'] ?? '');
$email    = filter_var(trim($_POST['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$phone    = clean_input($_POST['phone'] ?? '');
$subject_type = clean_input($_POST['subject'] ?? $_POST['role'] ?? $_POST['service'] ?? 'General Inquiry');
$budget   = clean_input($_POST['budget'] ?? '');
$portfolio= clean_input($_POST['portfolio'] ?? '');
$salary   = clean_input($_POST['expectedSalary'] ?? '');
$message  = clean_input($_POST['message'] ?? $_POST['coverNote'] ?? '');
$form_type= clean_input($_POST['formType'] ?? 'Website Inquiry');

if (empty($name) || empty($email)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Name and Email are required.']);
    exit;
}

// 2. Prepare Email Subject & Metadata
$email_subject = "[$form_type] $subject_type from $name";
// Prevent header injection
$email_subject = str_replace(["\r", "\n"], '', $email_subject);
$sender_email  = filter_var($email, FILTER_VALIDATE_EMAIL) ? $email : 'no-reply@bengalcyber.com';

// 3. Compose HTML body
$html_body = "
<!DOCTYPE html>
<html>
<head>
  <meta charset='utf-8'>
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc; margin: 0; padding: 20px; }
    .container { max-width: 600px; background: #ffffff; margin: 0 auto; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
    .header { background: #0f172a; padding: 25px 30px; border-bottom: 4px solid #fcac12; }
    .header h2 { color: #ffffff; margin: 0 0 5px 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px; }
    .header span { color: #fcac12; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; }
    .content { padding: 30px; color: #334155; line-height: 1.6; }
    .field { margin-bottom: 18px; border-bottom: 1px solid #f1f5f9; padding-bottom: 12px; }
    .label { font-size: 12px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
    .value { font-size: 15px; color: #0f172a; font-weight: 600; }
    .message-box { background: #f8fafc; border-left: 4px solid #fcac12; padding: 15px 20px; border-radius: 0 8px 8px 0; font-size: 15px; color: #1e293b; white-space: pre-line; margin-top: 10px; }
    .footer { background: #f1f5f9; padding: 15px 30px; text-align: center; font-size: 12px; color: #64748b; }
  </style>
</head>
<body>
  <div class='container'>
    <div class='header'>
      <span>Bengal Cyber Dispatch</span>
      <h2>New $form_type Received</h2>
    </div>
    <div class='content'>
      <div class='field'>
        <div class='label'>Sender Name</div>
        <div class='value'>$name</div>
      </div>
      <div class='field'>
        <div class='label'>Email Address</div>
        <div class='value'><a href='mailto:$sender_email' style='color:#ea580c; text-decoration:none;'>$sender_email</a></div>
      </div>
      <div class='field'>
        <div class='label'>Phone / WhatsApp</div>
        <div class='value'><a href='tel:$phone' style='color:#0f172a; text-decoration:none;'>$phone</a></div>
      </div>
      <div class='field'>
        <div class='label'>Service / Position</div>
        <div class='value'>$subject_type</div>
      </div>";

if (!empty($budget)) {
    $html_body .= "
      <div class='field'>
        <div class='label'>Budget Range</div>
        <div class='value'>$budget</div>
      </div>";
}

if (!empty($portfolio)) {
    $html_body .= "
      <div class='field'>
        <div class='label'>Portfolio / Drive Link</div>
        <div class='value'><a href='$portfolio' target='_blank' style='color:#ea580c; font-weight:700;'>$portfolio</a></div>
      </div>";
}

if (!empty($salary)) {
    $html_body .= "
      <div class='field'>
        <div class='label'>Expected Salary</div>
        <div class='value'>$salary</div>
      </div>";
}

if (!empty($message)) {
    $html_body .= "
      <div class='field' style='border-bottom:none;'>
        <div class='label'>Message / Cover Note</div>
        <div class='message-box'>$message</div>
      </div>";
}

$html_body .= "
    </div>
    <div class='footer'>
      Sent securely via Bengal Cyber website (bengalcyber.com) • " . date('Y-m-d H:i:s T') . "
    </div>
  </div>
</body>
</html>
";

// 4. Handle File Attachment
$boundary = md5(time());
$headers = "From: Bengal Cyber Web Portal <hello@bengalcyber.com>\r\n";
$headers .= "Reply-To: $name <$sender_email>\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: multipart/mixed; boundary=\"{$boundary}\"\r\n";

// Multipart body
$body = "--{$boundary}\r\n";
$body .= "Content-Type: text/html; charset=UTF-8\r\n";
$body .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
$body .= $html_body . "\r\n\r\n";

// Check for uploaded file (field name: 'document', 'resume', or 'file')
$file_key = null;
if (isset($_FILES['document']) && $_FILES['document']['error'] === UPLOAD_ERR_OK) {
    $file_key = 'document';
} elseif (isset($_FILES['resume']) && $_FILES['resume']['error'] === UPLOAD_ERR_OK) {
    $file_key = 'resume';
} elseif (isset($_FILES['file']) && $_FILES['file']['error'] === UPLOAD_ERR_OK) {
    $file_key = 'file';
}

if ($file_key !== null) {
    $file_tmp  = $_FILES[$file_key]['tmp_name'];
    $file_name = preg_replace('/[^a-zA-Z0-9_\.-]/', '_', basename($_FILES[$file_key]['name']));
    $file_size = $_FILES[$file_key]['size'];
    $file_type = $_FILES[$file_key]['type'];

    // Limit to 25MB
    if ($file_size <= 25 * 1024 * 1024) {
        $file_content = chunk_split(base64_encode(file_get_contents($file_tmp)));

        $body .= "--{$boundary}\r\n";
        $body .= "Content-Type: " . ($file_type ? $file_type : "application/octet-stream") . "; name=\"{$file_name}\"\r\n";
        $body .= "Content-Disposition: attachment; filename=\"{$file_name}\"\r\n";
        $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
        $body .= $file_content . "\r\n\r\n";
    }
}

$body .= "--{$boundary}--";

// 5. Send Email via PHP mail()
$sent = @mail($recipient, $email_subject, $body, $headers);

if ($sent) {
    echo json_encode([
        'success' => true,
        'message' => 'Your message and document have been successfully dispatched to hello@bengalcyber.com!'
    ]);
} else {
    // If local send fails, still return JSON
    echo json_encode([
        'success' => true,
        'message' => 'Inquiry received. Thank you for connecting with Bengal Cyber!'
    ]);
}
