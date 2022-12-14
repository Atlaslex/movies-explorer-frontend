const regex = {
  name: /^[A-Za-zА-Яа-яЁё /s -]+$/,
  email:
    /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@([a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|ru)$/i,

    password:   /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]/,
};
const config = {
  name: { isEmpty: true, minLength: 2, maxLength: 30, isName: true },
  email: { isEmpty: true, isEmail: true },
  password: { isEmpty: true, minLength: 3, maxLength: 30 , isPass: true },
  etc: { isEmpty: true },
  nameProfile: { minLength: 2, maxLength: 30, isName: true },
  emailProfile: { isEmail: true },
};
const reports = {
  apiMessages: {
    not_found: "Ничего не найдено",
    error:
      "Произошла ошибка. Возможно, проблема с подключением. Подождите и повторите запрос",
  },

  attentionMessages: {
    done: {
      upd_profile: "Обновление профиля прошло успешно",
    },

    error: {
      upd_profile: "Не удалось обновить профиль!",
      delete_movie: "Не удалось удалить фильм!",
      add_movie: "Не удалось добавить фильм!",
      get_user: "Произошла ошибка!",
      autorization: 'Ошибка авторизации!',
    },
  },
};

const count = {
  narrow_screen: {
    add: 2,
    start: 5,
  },
  normal_screen: {
    add: 2,
    start: 8,
  },
  wide_screen: {
    add: 3,
    start: 12,
  },
};

const breackpoint = {
  two: 1280,
  one: 700,
};

const base_url = "https://api.nomoreparties.co";

const short_movie = 40;

export { reports, base_url, count, short_movie, breackpoint, regex, config };
