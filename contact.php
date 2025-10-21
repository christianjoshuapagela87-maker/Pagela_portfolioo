<?php
header('Content-Type: application/json; charset=utf-8');

// load DB — adjust path if needed:
require __DIR__ . '/db.php';

// Only POST allowed
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['success'=>false,'message'=>'Method not allowed']);
  exit;
}

// simple validation & sanitization
$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$message = trim($_POST['message'] ?? '');
if (!$name || !$email || !$message) {
  http_response_code(422);
  echo json_encode(['success'=>false,'message'=>'Please complete the form.']);
  exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(422);
  echo json_encode(['success'=>false,'message'=>'Invalid email address.']);
  exit;
}

// prepared statement to avoid injections
$stmt = $conn->prepare("INSERT INTO messages (name, email, message) VALUES (?, ?, ?)");
if (!$stmt) {
  http_response_code(500);
  echo json_encode(['success'=>false,'message'=>'DB error.']);
  exit;
}
$stmt->bind_param('sss', $name, $email, $message);
if ($stmt->execute()) {
  // optionally send email (requires server mail configured)
  // mail($to, $subject, $message, $headers);

  echo json_encode(['success'=>true,'message'=>'Message received.']);
} else {
  http_response_code(500);
  echo json_encode(['success'=>false,'message'=>'Failed to save message.']);
}
$stmt->close();
$conn->close();
