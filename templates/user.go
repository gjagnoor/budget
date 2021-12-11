package templates

const UsersListHTML = `
<h1>Users</h1>
<dl>
{{range .Users}}
	<dd><strong>{{.ID}}</strong></dd>
	<dd>{{.Email}}</dd>
	<dd>{{.Joined}}</dd>
{{end}}
</dl>
`

const UserListHTML = `
<h1>User</h1>
<dl>
	<dd><strong>{{.User}}</strong></dd>
</dl>
`