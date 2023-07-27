Algoritmo sin_titulo
	
	definir martillo Como Entero
	definir puntillas Como Entero
	definir totalVentas Como Entero
	
	Escribir "Ingrese el valor de los martillos: "
	leer martillo
	Escribir  "Ingrese el valor de las puntillas: "
	leer puntillas
	
	totalVentas <- martillo + puntillas
	
	si totalVentas > 1000000 Entonces
		totalVentas <- totalVentas + 200000
		Escribir  "Bonificaste $200.000, tus ingresos son de $ 1.200.000"
	FinSi
	
	Si totalVentas < 200000 Entonces
        Escribir "Como tus ventas son del valor de $ " totalVentas " No cumpliste con las ventas mínimas del mes"
	sino 
		Escribir "No bonificaste tus ingresos son de: $" totalVentas
    FinSi
FinAlgoritmo