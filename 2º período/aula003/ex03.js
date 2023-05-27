temp = 7.1
if(temp > 7.5) {
    console.log('O paciente está com COVID.')
} else if (temp > 7.0 && temp < 7.5 ) {
    console.log('O paciente está com suspeita de COVID.')
} else {
    console.log('O paciente não está com COVID.')
}