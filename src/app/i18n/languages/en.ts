export default {
  auth_main: {
    title_line_1: 'Welcome to Volito Test App',
    title_line_2: 'Created by Artem Revenko',

    with_phone: 'Continue with Phone',
    with_apple: 'Continue with Apple',
    with_google: 'Continue with Google',
  },

  input: {
    select_country: 'Select country',
    search: 'Search',
  },

  sign_up: {
    title: 'Sign up',
    name: 'Name',
    surname: 'Surname',
    email: 'Email',
    create_account: 'Create an account',
    user_created: 'User created',
  },

  add_phone: {
    title: 'Continue with Phone',
    description:
      'Enter your phone number so we can send you a confirmation code',
    placeholder: 'Enter number',
    continue: 'Continue',
  },

  confirm_code: {
    title: 'Number confirmation',
    description_text_1: 'We have sent a confirmation code to your phone number',
    description_text_2: 'Please enter it in the field below.',
    resend_code: 'Resend code',
  },

  notes: { title: 'Notes' },
  map: { title: 'Map' },

  user_exist: 'A user with these credentials already exists',

  button: {
    continue: 'Continue',
    confirm: 'Confirm',
    cancel: 'Cancel',
    ok: 'Okay',
    save: 'Save',
    subscribe: 'Subscribe',
    search: 'Search',
    delete: 'Delete',
    decline: 'Decline',
    send: 'Send',
    accept: 'Accept',
  },

  validation: {
    min: 'The minimum character value is {{value}}',
    max: 'Maximum character value - {{value}}',
    email: 'Invalid email',
    phone: 'Invalid phone number',
    required: 'This field is required',
    password: 'Invalid password',
    re_password: 'Confirm password does not match password',
  },

  image_picker: {
    title: 'Which photo to use?',
    camera: 'Camera',
    gallery: 'Gallery',
    edit_photo: 'Edit Photo',
    image_size: 'Photo size is too large',
  },

  warning: 'Warning',
  success: 'Success',
  error: 'Error',
  attention: 'Attention',

  media: {
    upload_photo_or_video: 'Upload photo or video',
    media_not_uploaded_yet: 'Media not yet uploaded',
    uploading_media: 'Uploading media',
  },

  firebase_error: {
    'auth/app-not-authorized':
      'This app does not have access to Firebase on this domain.',
    'auth/app-not-installed':
      'The application you are trying to use is not installed on your device.',
    'auth/cordova-not-ready': 'Error: Cordova framework is not ready.',
    'auth/cors-unsupported': 'This browser is not supported.',
    'auth/credential-already-in-use':
      'This account is already associated with another user account.',
    'auth/custom-token-mismatch': 'Custom token matches a different audience.',
    'auth/requires-recent-login':
      'This operation is sensitive and requires recent authentication. Please sign in again before trying this request again.',
    'auth/dynamic-link-not-activated':
      'Enable dynamic links in the Firebase console and agree to the terms and conditions.',
    'auth/email-already-in-use':
      'This email address is already in use by another account.',
    'auth/expired-action-code': 'The action code has expired.',
    'auth/cancelled-popup-request':
      'This operation was canceled due to opening another conflicting pop-up window.',
    'auth/internal-error': 'An internal error has occurred.',
    'auth/invalid-app-id':
      'The mobile application ID is not registered for the current project.',
    'auth/invalid-user-token':
      'The user account is no longer valid. You must sign in again.',
    'auth/invalid-auth-event': 'An internal error has occurred.',
    'auth/invalid-verification-code': 'The verification code is invalid.',
    'auth/invalid-cordova-configuration':
      'To enable OAuth login, you need to install the following Cordova plugins.',
    'auth/invalid-custom-token':
      'Invalid custom token format. Please refer to the documentation.',
    'auth/invalid-email': 'The email address is not formatted correctly.',
    'auth/invalid-api-key':
      'Your API key is invalid, please make sure you have copied it correctly.',
    'auth/invalid-credential':
      'The automatic account provided is not formatted correctly or has expired.',
    'auth/invalid-message-payload':
      'The email template corresponding to this action contains invalid characters in your message. Please fix this in the Authentication Templates section of the Firebase Console.',
    'auth/invalid-oauth-provider':
      'EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.',
    'auth/unauthorized-domain':
      'This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains in the Firebase console.',
    'auth/invalid-action-code':
      'The action code is invalid. This can happen if the code is entered incorrectly, has expired, or has already been used.',
    'auth/wrong-password':
      'The password is incorrect or the user does not have a password.',
    'auth/invalid-recipient-email':
      'The email corresponding to this action was not sent because the specified recipient address is not valid.',
    'auth/invalid-sender':
      'The email template corresponding to this action contains an invalid sender address or name. Please correct this by going to the Authentication Templates section of the Firebase Console.',
    'auth/invalid-verification-id':
      'The verifier ID used to create the authorization account is invalid.',
    'auth/missing-iframe-start': 'An internal error has occurred.',
    'auth/missing-verification-code':
      'A phone authentication account was created with an empty SMS verification code.',
    'auth/missing-verification-id':
      'The phone authentication account was created with an empty verification ID.',
    'auth/app-deleted': 'This instance of FirebaseApp has been deleted.',
    'auth/account-exists-with-different-credential':
      'An account already exists with the same email address but different login details.',
    'auth/network-request-failed':
      'A network error has occurred (eg timeout, connection lost, or host unreachable).',
    'auth/no-auth-event': 'An internal error has occurred.',
    'auth/no-such-provider':
      'The user is not linked to the account of the specified provider.',
    'auth/operation-not-allowed':
      'The provided provider is disabled for this Firebase project.',
    'auth/operation-not-supported-in-this-environment':
      'This operation is not supported in the environment.',
    'auth/popup-blocked':
      'Could not connect to the popup. It may have been blocked by your browser.',
    'auth/popup-closed-by-user':
      'The pop-up window was closed by the user before the operation was completed.',
    'auth/provider-already-linked':
      'A user can only be linked to one account for a given provider.',
    'auth/quota-exceeded':
      'The project quota for this operation has been exceeded.',
    'auth/redirect-cancelled-by-user':
      'The redirect operation was canceled by the user before completion.',
    'auth/redirect-operation-pending':
      'The login redirection operation is already waiting to complete.',
    'auth/timeout': 'Operation timed out.',
    'auth/user-token-expired':
      'The user account is no longer valid. User must log in again.',
    'auth/too-many-requests':
      'We are blocking all requests from this device due to unusual activity. Please try again later.',
    'auth/user-cancelled':
      'The user did not grant the permissions you requested at your request.',
    'auth/user-not-found':
      'There is no user record matching this ID. The user may have been deleted.',
    'auth/user-disabled':
      'The user account has been disabled by an administrator.',
    'auth/user-mismatch':
      'The provided credentials do not match a previously registered user.',
    'auth/user-signed-out': 'User signed out.',
    'auth/weak-password': 'Password must contain 6 characters or more.',
    'auth/web-storage-unsupported':
      'This browser is not supported or third-party cookies and data may be disabled.',
    'auth/captcha-check-failed':
      'The reCAPTCHA response token is invalid, expired, already in use, or the domain associated with it does not match the list of allowed domains.',
    'auth/code-expired':
      'SMS code has expired. Please resend the verification code to try again.',
    'auth/invalid-app-credential':
      'The phone verification request contains an invalid application',
  },
}
