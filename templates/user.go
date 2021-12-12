package templates

const UsersListHTML = `
<h1>Users</h1>
<dl>
{{range .Users}}
	<dd><strong>{{.ID}}</strong></dd>
	<dd>{{.Email}}</dd>
	<dd>{{.Joined}}</dd>
	<form action="/users/{{.ID}}" method="POST">
		<button type="submit">DELETE</button>
	</form>
{{end}}
</dl>
`

const UserListHTML = `
<h1>User</h1>
<dl>
	<dd><strong>{{.User}}</strong></dd>
</dl>
`

const UserSignUpHTML = `
<h1>Sign Up</h1>
<form action="/user/new" method="POST">
	<table>
		<tr>
			<td>
				Email
			</td>
			<td>
				<input type="text" name="email" />
			</td>
			<td>
				Password
			</td>
			<td>
				<input type="password" name="password" />
			</td>
		</tr>
	</table>
	<button type="submit">Sign Me Up</button>
</form>
`