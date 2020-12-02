const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  permission_routes: state => state.permission.routes,
  groupid: state => state.user.groupId,
  groupname: state => state.user.groupName,
  islogin: state => state.user.islogin
}
export default getters
