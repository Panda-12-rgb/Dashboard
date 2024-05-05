document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('miFormulario').addEventListener('submit', function(event) {
      event.preventDefault(); // Evita que el formulario se envíe normalmente
    
      // Obtener los valores de los campos del formulario
    var pregunta1Valor1 = document.getElementById('pregunta1-valor1').value;
    var pregunta1Valor2 = document.getElementById('pregunta1-valor2').value;
    var pregunta2Valor1 = document.getElementById('pregunta2-valor1').value;
    var pregunta2Valor2 = document.getElementById('pregunta2-valor2').value;
    var pregunta3Valor1 = document.getElementById('pregunta3-valor1').value;
    var pregunta3Valor2 = document.getElementById('pregunta3-valor2').value;
    var pregunta4Valor1 = document.getElementById('pregunta4-valor1').value;
    var pregunta4Valor2 = document.getElementById('pregunta4-valor2').value;
    var pregunta5Valor1 = document.getElementById('pregunta5-valor1').value;
    var pregunta5Valor2 = document.getElementById('pregunta5-valor2').value;
    var pregunta6Valor1 = document.getElementById('pregunta6-valor1').value;
    var pregunta6Valor2 = document.getElementById('pregunta6-valor2').value;

      // Crear datos para las gráficas
    var data1 = {
        labels: ['Pregunta 1'],
        datasets: [{
        data: [pregunta1Valor1, pregunta1Valor2],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1
        }]
    };
    var data2 = {
        labels: ['Pregunta 2'],
        datasets: [{
        data: [pregunta2Valor1, pregunta2Valor2],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1
        }]
    };
    var data3 = {
        labels: ['Pregunta 3'],
        datasets: [{
        data: [pregunta3Valor1, pregunta3Valor2],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1
        }]
    };
    var data4 = {
        labels: ['Pregunta 4'],
        datasets: [{
        data: [pregunta4Valor1, pregunta4Valor2],
        backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
        }]
    };
    var data5 = {
        labels: ['Pregunta 5'],
        datasets: [{
        data: [pregunta5Valor1, pregunta5Valor2],
        backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
        }]
    };
    var data6 = {
        labels: ['Pregunta 6'],
        datasets: [{
        data: [pregunta6Valor1, pregunta6Valor2],
        backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
        ],
    borderWidth: 1
        }]
    };

      // Obtener el contexto del lienzo
    var ctx1 = document.getElementById('grafica1').getContext('2d');
    var ctx2 = document.getElementById('grafica2').getContext('2d');
    var ctx3 = document.getElementById('grafica3').getContext('2d');
    var ctx4 = document.getElementById('grafica4').getContext('2d');
    var ctx5 = document.getElementById('grafica5').getContext('2d');
    var ctx6 = document.getElementById('grafica6').getContext('2d');

      // Crear el gráfico de barras
    var myBarChart1 = new Chart(ctx1, {
        type: 'pie',
        data: data1,
        options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
            beginAtZero: true
            }
        }
        }
    });
    var myBarChart2 = new Chart(ctx2, {
        type: 'pie',
        data: data2,
        options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
            beginAtZero: true
            }
        }
        }
    });
    var myBarChart3 = new Chart(ctx3, {
        type: 'pie',
        data: data3,
        options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
            beginAtZero: true
            }
        }
        }
    });
    var myBarChart4 = new Chart(ctx4, {
        type: 'pie',
        data: data4,
        options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
            beginAtZero: true
            }
        }
        }
    });
    var myBarChart5 = new Chart(ctx5, {
        type: 'pie',
        data: data5,
        options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
            beginAtZero: true
            }
        }
        }
    });
    var myBarChart6 = new Chart(ctx6, {
        type: 'pie',
        data: data6,
        options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
            beginAtZero: true
            }
        }
        }
    });
    });
});