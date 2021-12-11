package templates

const ExpensesListHTML = `
<h1>Expenses</h1>
<dl>
{{range .Expenses}}
	<dd><strong>{{.ID}}</strong></dd>
	<dd>{{.Title}}</dd>
	<dd>{{.Amount}}</dd>
{{end}}
</dl>
`

const ExpenseListHTML = `
<h1>Expenses</h1>
<dl>
	<dd><strong>{{.Expense}}</strong></dd>
</dl>
`