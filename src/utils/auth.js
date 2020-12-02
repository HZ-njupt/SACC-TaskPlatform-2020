import Cookies from 'js-cookie'

const TokenKey = 'vue_admin_template_token'

export function getSession() {
  return sessionStorage.useremail
}

export function setSession(useremail) {
  sessionStorage.useremail = useremail
}

export function removeSession() {
  sessionStorage.useremail = ''
}
