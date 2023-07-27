Algoritmo sin_titulo
	
	definir martillo Como Entero
	definir puntillas Como Entero
	definir ventas Como Entero
	
	Escribir "Por favor ingrese el valor de las ventas del martillo: "
	leer martillo
	Escribir  "Por favor ingrese el valor de las ventas de las puntillas: "
	leer puntillas
	
	ventas <- martillo + puntillas
	
	si ventas > 1000000 Entonces
		ventas <- ventas + 200000
		Escribir  "Las ventas del mes son de: $" ventas
	FinSi
	
	Si ventas < 200000 Entonces
        Escribir "No lograste bonificar tus ingresos son de: $" ventas
	<!-- sino 
		Escribir "Tus ingresos son de: $" ventas -->
    FinSi
FinAlgoritmo