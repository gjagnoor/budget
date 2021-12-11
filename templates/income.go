package templates

const IncomesListHTML = `
<h1>Incomes</h1>
<dl>
{{range .Incomes}}
	<dd><strong>{{.ID}}</strong></dd>
	<dd>{{.Title}}</dd>
	<dd>{{.Amount}}</dd>
{{end}}
</dl>
`

const IncomeListHTML = `
<h1>Income</h1>
<dl>
	<dd><strong>{{.Income}}</strong></dd>
</dl>
`