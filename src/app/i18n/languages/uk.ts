export default {
  auth_main: {
    title_line_1: 'Ласкаво просимо до застосунку Notes',
    title_line_2: 'Створено Даніїлом Ревенком',

    with_phone: 'Продовжити з номером телефону',
    with_google: 'Продовжити з Google',

    success: 'Ви успішно увійшли',
  },

  input: {
    select_country: 'Оберіть країну',
    search: 'Пошук',
  },

  sign_up: {
    title: 'Реєстрація',
    name: 'Ім’я',
    surname: 'Прізвище',
    email: 'Електронна пошта',
    create_account: 'Створити обліковий запис',
    user_created: 'Користувача створено',
  },

  add_phone: {
    title: 'Продовжити з номером телефону',
    description:
      'Введіть свій номер телефону, щоб ми могли надіслати вам код підтвердження',
    placeholder: 'Введіть номер',
    continue: 'Продовжити',
  },

  confirm_code: {
    title: 'Підтвердження номера',
    description_text_1: 'Ми надіслали код підтвердження на ваш номер телефону',
    description_text_2: 'Будь ласка, введіть його у поле нижче.',
    resend_code: 'Надіслати код ще раз',
  },

  notes: {
    title: 'Нотатки',
    empty_list: 'Ви ще не створили жодної нотатки',
  },

  choose_language: 'Оберіть мову',

  log_out: 'Ви впевнені, що хочете вийти?',
  yes: 'Так',
  no: 'Ні',

  create_note: {
    title: 'Створити нову нотатку',
    enter_title: 'Введіть заголовок нотатки',
    enter_description: 'Введіть опис нотатки',
    enter_date: 'Введіть дату нотатки',
    create: 'Створити',
    created: 'Нотатку створено',
  },

  edit_note: {
    title: 'Редагувати нотатку',
    update: 'Оновити',
    updated: 'Нотатку оновлено',
  },

  map: { title: 'Карта' },

  user_exist: 'Користувач з такими даними вже існує',

  button: {
    confirm: 'Підтвердити',
    cancel: 'Скасувати',

    show_more: 'Показати більше',
    show_less: 'Показати менше',
  },

  validation: {
    min: 'Мінімальна кількість символів — {{value}}',
    max: 'Максимальна кількість символів — {{value}}',
    email: 'Некоректна електронна адреса',
    phone: 'Некоректний номер телефону',
    required: "Це поле обов'язкове",
    password: 'Некоректний пароль',
    re_password: 'Підтвердження паролю не збігається з паролем',
  },

  image_picker: {
    title: 'Яке фото використати?',
    camera: 'Камера',
    gallery: 'Галерея',
    edit_photo: 'Редагувати фото',
    image_size: 'Розмір фото занадто великий',
  },

  warning: 'Попередження',
  success: 'Успіх',
  error: 'Помилка',
  attention: 'Увага',

  media: {
    upload_photo_or_video: 'Завантажити фото або відео',
    media_not_uploaded_yet: 'Медіа ще не завантажено',
    uploading_media: 'Завантаження медіа',
  },

  loading: 'Завантаження...',

  firebase_error: {
    'auth/app-not-authorized':
      'Цей застосунок не має доступу до Firebase на цьому домені.',
    'auth/app-not-installed':
      'Застосунок, який ви намагаєтесь використати, не встановлений на вашому пристрої.',
    'auth/cordova-not-ready': 'Помилка: Cordova не готовий.',
    'auth/cors-unsupported': 'Цей браузер не підтримується.',
    'auth/credential-already-in-use':
      'Цей обліковий запис вже прив’язаний до іншого користувача.',
    'auth/custom-token-mismatch':
      'Індивідуальний токен не відповідає аудиторії.',
    'auth/requires-recent-login':
      'Ця дія вимагає повторної авторизації. Будь ласка, увійдіть ще раз.',
    'auth/dynamic-link-not-activated':
      'Активуйте динамічні посилання у Firebase та погодьтеся з умовами.',
    'auth/email-already-in-use':
      'Ця електронна адреса вже використовується іншим обліковим записом.',
    'auth/expired-action-code': 'Код дії протермінований.',
    'auth/cancelled-popup-request': 'Операція скасована через інше вікно.',
    'auth/internal-error': 'Внутрішня помилка.',
    'auth/invalid-app-id':
      'ID застосунку не зареєстрований у проєкті Firebase.',
    'auth/invalid-user-token': 'Користувач недійсний. Необхідно увійти знову.',
    'auth/invalid-auth-event': 'Внутрішня помилка.',
    'auth/invalid-verification-code': 'Код підтвердження недійсний.',
    'auth/invalid-cordova-configuration':
      'Для OAuth-авторизації встановіть необхідні Cordova плагіни.',
    'auth/invalid-custom-token': 'Недійсний формат індивідуального токену.',
    'auth/invalid-email': 'Невірний формат електронної пошти.',
    'auth/invalid-api-key': 'Ваш API-ключ недійсний.',
    'auth/invalid-credential': 'Недійсні або протерміновані облікові дані.',
    'auth/invalid-message-payload': 'Шаблон містить недійсні символи.',
    'auth/invalid-oauth-provider':
      'Ця операція підтримує лише OAuth-провайдерів.',
    'auth/unauthorized-domain': 'Цей домен не авторизований у Firebase.',
    'auth/invalid-action-code': 'Недійсний або вже використаний код дії.',
    'auth/wrong-password':
      'Невірний пароль або відсутній пароль у користувача.',
    'auth/invalid-recipient-email': 'Недійсна адреса одержувача.',
    'auth/invalid-sender': 'Невірна адреса або ім’я відправника.',
    'auth/invalid-verification-id': 'Недійсний ідентифікатор підтвердження.',
    'auth/missing-iframe-start': 'Внутрішня помилка.',
    'auth/missing-verification-code': 'Код підтвердження не введено.',
    'auth/missing-verification-id': 'Відсутній ідентифікатор підтвердження.',
    'auth/app-deleted': 'Цей екземпляр FirebaseApp був видалений.',
    'auth/account-exists-with-different-credential':
      'Обліковий запис з такою поштою вже існує.',
    'auth/network-request-failed':
      'Помилка мережі (тайм-аут, втрачено з’єднання тощо).',
    'auth/no-auth-event': 'Внутрішня помилка.',
    'auth/no-such-provider': 'Користувач не прив’язаний до цього провайдера.',
    'auth/operation-not-allowed': 'Цей тип авторизації вимкнений у Firebase.',
    'auth/operation-not-supported-in-this-environment':
      'Операція не підтримується у цьому середовищі.',
    'auth/popup-blocked': 'Вікно авторизації заблоковане браузером.',
    'auth/popup-closed-by-user': 'Користувач закрив вікно до завершення дії.',
    'auth/provider-already-linked':
      'Користувача вже прив’язано до цього провайдера.',
    'auth/quota-exceeded': 'Перевищено квоту проєкту.',
    'auth/redirect-cancelled-by-user':
      'Перенаправлення скасовано користувачем.',
    'auth/redirect-operation-pending': 'Операція авторизації вже очікує.',
    'auth/timeout': 'Час очікування минув.',
    'auth/user-token-expired':
      'Сесія користувача протермінована. Потрібно увійти знову.',
    'auth/too-many-requests': 'Забагато запитів. Спробуйте пізніше.',
    'auth/user-cancelled': 'Користувач скасував авторизацію.',
    'auth/user-not-found': 'Користувача з такими даними не знайдено.',
    'auth/user-disabled': 'Обліковий запис користувача вимкнено.',
    'auth/user-mismatch':
      'Надані дані не збігаються з попереднім користувачем.',
    'auth/user-signed-out': 'Користувач вийшов із системи.',
    'auth/weak-password': 'Пароль має містити щонайменше 6 символів.',
    'auth/web-storage-unsupported':
      'Браузер не підтримує збереження або куки вимкнено.',
    'auth/captcha-check-failed':
      'Невірний або протермінований токен reCAPTCHA.',
    'auth/code-expired': 'Код з SMS протермінований. Надішліть новий.',
    'auth/invalid-app-credential':
      'Невірний застосунок під час підтвердження телефону.',
    'auth/billing-not': 'Внутрішня помилка.',
  },
}
