Algoritmo sin_titulo
	Definir martillo Como Entero
	Definir puntillas Como Entero
	Definir ventas Como Entero
	Escribir 'Por favor ingrese el valor de las ventas del martillo: '
	Leer martillo
	Escribir 'Por favor ingrese el valor de las ventas de las puntillas: '
	Leer puntillas
	ventas <- martillo+puntillas
	Si ventas>1000000 Entonces
		Escribir 'Las ventas del mes son $', ventas
		bonificacion <- 200000
		Escribir 'Mas Bonificacion $', bonificacion
		ventas <- ventas+200000
		Escribir 'Total = ', ventas
	FinSi
	Si ventas<1000000 Y ventas>200000 Entonces
		Escribir 'Tus ingresos son $', ventas
		Escribir 'Mas bonificacion $', 0
		Escribir 'Total = ', ventas
	FinSi
	Si ventas<200000 Entonces
		Escribir 'No cumpliste con las ventas mínimas del: $', ventas
	FinSi
FinAlgoritmo
