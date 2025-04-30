document.addEventListener('DOMContentLoaded', function () {
    function generarPDF() {
        const nombre = document.getElementById('nombre').value;
        const rut = document.getElementById('rut').value;
        const fechaNacimiento = document.getElementById('fecha_nacimiento').value;
        const edadCronologica = document.getElementById('edad-crono').value;
        const prematuro = document.getElementById('prematuro').value;
        const edadCorregida = document.getElementById('edad-corr').value;
        const nombreInstitucion = document.getElementById('nombre-institucion').value;
        const nombreProfesional = document.getElementById('nombre-profesional').value;
        const cargoProfesional = document.getElementById('cargo-profesional').value;
        const fonoInstitucion = document.getElementById('fono-institucion').value;
        const mailInstitucion = document.getElementById('mail-institucion').value;
        const intencionComunicativa = document.getElementById('intencion-comunicativa').value;
        const obs1 = document.getElementById('obs-1').value;
        const tipoLgeExp = document.getElementById('tipo-lge-exp').value;
        const obs2 = document.getElementById('obs-2').value;
        const tipoLgeComp = document.getElementById('tipo-lge-comp').value;
        const obs3 = document.getElementById('obs-3').value;
        const intencionManipulativa = document.getElementById('intencion-manipulativa').value;
        const obs4 = document.getElementById('obs-4').value;
        const avd = document.getElementById('avd').value;
        const obs5 = document.getElementById('obs-5').value;
        const autonomiaAvd = document.getElementById('autonomia-avd').value;
        const obs6 = document.getElementById('obs-6').value;
        const esfinter = document.getElementById('esfinter').value;
        const obs7 = document.getElementById('obs-7').value;
        const eliminacion = document.getElementById('eliminacion').value;
        const obs8 = document.getElementById('obs-8').value;
        const ventilacion = document.getElementById('ventilacion').value;
        const obs9 = document.getElementById('obs-9').value;
        const ortesis = document.getElementById('ortesis').value;
        const obs10 = document.getElementById('obs-10').value;
        const juego = document.getElementById('juego').value;
        const obs12 = document.getElementById('obs-12').value;
        const diagnosticos = document.getElementById('diagnosticos').value;
        const riesgo_vital = document.getElementById('riesgo-vital').value;
        const obs13 = document.getElementById('obs-13').value;
        const farmacos = document.getElementById('farmacos').value;
        const tratantes = document.getElementById('tratantes').value;
        const viaAlim = document.getElementById('via-alim').value;
        const obs133 = document.getElementById('obs-133').value;
        const tipoAlim = document.getElementById('tipo-alim').value;
        const obs14 = document.getElementById('obs-14').value;
        const formaAlim = document.getElementById('forma-alim').value;
        const obs15 = document.getElementById('obs-15').value;
        const indicacionesAlim = document.getElementById('indicaciones-alim').value;
        const indicacionesAlimWrapper = document.getElementById('indicaciones-alim-wrapper').value;
        const contraindicacionesAlim = document.getElementById('contraindicaciones-alim').value;
        const contraindicacionesAlimWrapper = document.getElementById('contraindicaciones-alim-wrapper').value;
        const posicionamiento = document.getElementById('posicionamiento').value;
        const obs16 = document.getElementById('obs-16').value;
        const tipoDesplazamiento = document.getElementById('tipo-desplazamiento').value;
        const obs17 = document.getElementById('obs-17').value;
        const ctrlCorporal = document.getElementById('ctrl-corporal').value;
        const obs177 = document.getElementById('obs-177').value;
        const comprMotor = document.getElementById('compr-motor').value;
        const obs18 = document.getElementById('obs-18').value;
        const sugerenciasMovilidad = document.getElementById('sugerencias-movilidad').value;
        const adaptacionEntornos = document.getElementById('adaptacion-entornos').value;
        const adaptacionPersonas = document.getElementById('adaptacion-personas').value;
        const adaptacionGeneral = document.getElementById('adaptacion-general').value;
        const gustos = document.getElementById('gustos').value;
        const tolerancia = document.getElementById('tolerancia').value;
        const obs188 = document.getElementById('obs-188').value;
        const interaccion = document.getElementById('interaccion').value;
        const interaccionWrapper = document.getElementById('interaccion-w').value;
        const escolaridad = document.getElementById('escolaridad').value;
        const obs28 = document.getElementById('obs-28').value;
        const obsInteraccion = document.getElementById('obs-interaccion').value;
        const alteracionesSensoriales = document.getElementById('alteraciones-sensoriales').value;
        const obs19 = document.getElementById('obs-19').value;
        const respVisual = document.getElementById('resp-visual').value;
        const respTacto = document.getElementById('resp-tacto').value;
        const respAudio = document.getElementById('resp-audio').value;
        const respOlfato = document.getElementById('resp-olfato').value;
        const respGusto = document.getElementById('resp-gusto').value;
        const respVestibular = document.getElementById('resp-vestibular').value;
        const capacidadResponsivaGral = document.getElementById('capacidad-responsiva-gral').value;
        const lentesAudifonos = document.getElementById('lentes-audifonos').value;
        const obs20 = document.getElementById('obs-20').value;
        const estrabismo = document.getElementById('estrabismo').value;
        const obs21 = document.getElementById('obs-21').value;
        const estadoVigil = document.getElementById('estado-vigil').value;
        const obs22 = document.getElementById('obs-22').value;
        const percepcion = document.getElementById('percepcion').value;
        const atencion = document.getElementById('atencion').value;
        const memoria = document.getElementById('memoria').value;
        const psicomotricidad = document.getElementById('psicomotricidad').value;
        const lenguaje = document.getElementById('lenguaje').value;
        const psicoemocional = document.getElementById('psicoemocional').value;
        const desregulacion = document.getElementById('desregulacion').value;
        const obs23 = document.getElementById('obs-23').value;
        const evPsicometrica = document.getElementById('ev-psicometrica').value;
        const obs24 = document.getElementById('obs-24').value;
        const apego = document.getElementById('apego').value;
        const obs25 = document.getElementById('obs-25').value;
        const responsable = document.getElementById('responsable').value;
        const obs26 = document.getElementById('obs-26').value;
        const casoSocial = document.getElementById('caso-social').value;
        const obs27 = document.getElementById('obs-27').value;
        const familia = document.getElementById('familia').value;
        const composicionFamiliaWrapper = document.getElementById('composicion-familia-w').value;
        const estratoFamiliaWrapper = document.getElementById('estrato-familia-w').value;
        const interesFamiliaWrapper = document.getElementById('interes-familia-w').value;
        const obsFamilia = document.getElementById('obs-familia').value;


        // Formato de fecha para mostrarla correctamente en el PDF
        const fechaNacimientoFormatted = new Date(fechaNacimiento).toLocaleDateString('es-CL');

        const docDefinition = {
            content: [
                {
                    text: 'PAUTA DE COTEJO PARA LA INCLUSIÓN EDUCATIVA',
                    style: 'documentTitle'
                },
                //LINEA
                {
                    canvas: [
                        {
                            type: 'line',
                            x1: 0, y1: 0,
                            x2: 515, y2: 0,
                            lineWidth: 3,
                            lineColor: '#4A90E2'
                        }
                    ],
                    margin: [0, 10, 0, 20]
                },
                {
                    text: 'El presente documento tiene como propósito entregar al establecimiento educativo una visión integral del estudiante que se incorporará, a partir de los antecedentes proporcionados por la institución de salud que lo atiende. Este informe, elaborado por los especialistas a cargo de su proceso terapéutico y/o de rehabilitación, busca orientar decisiones pedagógicas que favorezcan su inclusión, considerando sus características personales, necesidades específicas y posibles barreras para el aprendizaje y la participación.',
                    style: 'introText'
                },
                // Título "Antecedentes personales del niño"
                {
                    text: 'ANTECEDENTES PERSONALES DEL NIÑO/A',
                    style: 'sectionTitle'
                },

                //LINEA DE TÍTULOS

                {
                    canvas: [
                        {
                            type: 'line',
                            x1: 0, y1: 0,
                            x2: 515, y2: 0,
                            lineWidth: 1,
                            lineColor: '#4A90E2'
                        }
                    ],
                    margin: [0, 1, 0, 20]
                },

                // Nombre
                {
                    text: 'Nombre:',
                    style: 'fieldTitle'
                },
                {
                    text: nombre,
                    style: 'fieldValue'
                },
                // RUT
                {
                    text: 'RUT:',
                    style: 'fieldTitle'
                },
                {
                    text: rut,
                    style: 'fieldValue'
                },
                // Fecha de Nacimiento
                {
                    text: 'Fecha de Nacimiento:',
                    style: 'fieldTitle'
                },
                {
                    text: fechaNacimientoFormatted,
                    style: 'fieldValue'
                },
                // Edad Cronológica
                {
                    text: 'Edad Cronológica:',
                    style: 'fieldTitle'
                },
                {
                    text: edadCronologica,
                    style: 'fieldValue'
                },

                // prematuro?
                {
                    text: 'Es prematuro?:',
                    style: 'fieldTitle'
                },
                {
                    text: prematuro,
                    style: 'fieldValue'
                },
                // Verificar si es prematuro y mostrar la "Edad Corregida"
                prematuro === 'Sí' ? [
                    {
                        text: 'Edad Corregida:',
                        style: 'fieldTitle'
                    },
                    {
                        text: edadCorregida,
                        style: 'fieldValue'
                    }
                ] : [],

                // Título "Antecedentes DE LA INSTITUCIÓN DE SALUD"
                {
                    text: 'ANTECEDENTES DE LA INSTITUCIÓN DE SALUD',
                    style: 'sectionTitle'
                },

                //LINEA DE TÍTULOS
                {
                    canvas: [
                        {
                            type: 'line',
                            x1: 0, y1: 0,
                            x2: 515, y2: 0,
                            lineWidth: 1,
                            lineColor: '#4A90E2'
                        }
                    ],
                    margin: [0, 1, 0, 20]
                },

                // Nombre
                {
                    text: 'Nombre de la institución:',
                    style: 'fieldTitle'
                },
                {
                    text: nombreInstitucion,
                    style: 'fieldValue'
                },
                // Nombre profesional
                {
                    text: 'Nombre profesional responsable:',
                    style: 'fieldTitle'
                },
                {
                    text: nombreProfesional,
                    style: 'fieldValue'
                },

                // Cargo profesional
                {
                    text: 'Cargo del profesional responsable:',
                    style: 'fieldTitle'
                },
                {
                    text: cargoProfesional,
                    style: 'fieldValue'
                },

                // Teléfono de la institución
                {
                    text: 'Teléfono de la institución:',
                    style: 'fieldTitle'
                },
                {
                    text: fonoInstitucion,
                    style: 'fieldValue'
                },

                // Correo electrónico de la institución

                {
                    text: 'Correo electrónico de la institución:',
                    style: 'fieldTitle'
                },
                {
                    text: mailInstitucion,
                    style: 'fieldValue'
                },

                // Título "ÁREA COMUNICACIÓN Y LENGUAJE"
                {
                    text: 'ÁREA COMUNICACIÓN Y LENGUAJE',
                    style: 'sectionTitle'
                },

                //LINEA DE TÍTULOS
                {
                    canvas: [
                        {
                            type: 'line',
                            x1: 0, y1: 0,
                            x2: 515, y2: 0,
                            lineWidth: 1,
                            lineColor: '#4A90E2'
                        }
                    ],
                    margin: [0, 1, 0, 20]
                },

                // intención comunicativa                
                {
                    text: '¿El niño/a presenta intención comunicativa?:',
                    style: 'fieldTitle'
                },
                {
                    text: intencionComunicativa,
                    style: 'fieldValue'
                },

                // Observaciones
                obs1 !== '' ? [
                    {
                        text: 'Observaciones:',
                        style: 'fieldTitle'
                    },
                    {
                        text: obs1,
                        style: 'fieldValue'
                    }
                ] : [],


                // Tipo de LGE Expresión
                {
                    text: 'Tipo de lenguaje expresivo:',
                    style: 'fieldTitle'
                },
                {
                    text: tipoLgeExp,
                    style: 'fieldValue'
                },

                // Observaciones
                obs2 !== '' ? [
                    {
                        text: 'Observaciones:',
                        style: 'fieldTitle'
                    },
                    {
                        text: obs2,
                        style: 'fieldValue'
                    }
                ] : [],

                // Tipo de LGE Comprensión
                {
                    text: 'Tipo de lenguaje comprensivo:',
                    style: 'fieldTitle'
                },
                {
                    text: tipoLgeComp,
                    style: 'fieldValue'
                },

                // Observaciones
                obs3 !== '' ? [
                    {
                        text: 'Observaciones:',
                        style: 'fieldTitle'
                    },
                    {
                        text: obs3,
                        style: 'fieldValue'
                    }
                ] : [],

                // Título "FUNCIONAMIENTO"
                {
                    text: 'ÁREA FUNCIONAMIENTO',
                    style: 'sectionTitle'
                },

                //LINEA DE TÍTULOS
                {
                    canvas: [
                        {
                            type: 'line',
                            x1: 0, y1: 0,
                            x2: 515, y2: 0,
                            lineWidth: 1,
                            lineColor: '#4A90E2'
                        }
                    ],
                    margin: [0, 1, 0, 20]
                },

                // INTENCIÓN MANIPULATIVA
                {
                    text: '¿El niño/a presenta intención manipulativa?:',
                    style: 'fieldTitle'
                },
                {
                    text: intencionManipulativa,
                    style: 'fieldValue'
                },

                // Observaciones
                obs4 !== '' ? [
                    {
                        text: 'Observaciones:',
                        style: 'fieldTitle'
                    },
                    {
                        text: obs4,
                        style: 'fieldValue'
                    }
                ] : [],

                // AVD
                {
                    text: '¿El niño/a realiza AVD (Actividades de la Vida Diaria) de acuerdo a su edad?:',
                    style: 'fieldTitle'
                },
                {
                    text: avd,
                    style: 'fieldValue'
                },
                // Observaciones
                obs5 !== '' ? [
                    {
                        text: 'Observaciones:',
                        style: 'fieldTitle'
                    },
                    {
                        text: obs5,
                        style: 'fieldValue'
                    }
                ] : [],

                // AUTONOMÍA AVD
                {
                    text: '¿El niño/a presenta autonomía en AVD?:',
                    style: 'fieldTitle'
                },
                {
                    text: autonomiaAvd,
                    style: 'fieldValue'
                },
                // Observaciones
                obs6 !== '' ? [
                    {
                        text: 'Observaciones:',
                        style: 'fieldTitle'
                    },
                    {
                        text: obs6,
                        style: 'fieldValue'
                    }
                ] : [],
                // ESFÍNTER
                {
                    text: '¿El niño/a presenta control de esfínteres?:',
                    style: 'fieldTitle'
                },
                {
                    text: esfinter,
                    style: 'fieldValue'
                },
                // Observaciones
                obs7 !== '' ? [
                    {
                        text: 'Observaciones:',
                        style: 'fieldTitle'
                    },
                    {
                        text: obs7,
                        style: 'fieldValue'
                    }
                ] : [],
                // ELIMINACIÓN
                {
                    text: '¿El niño/a usa vía alternativa de eliminación?:',
                    style: 'fieldTitle'
                },
                {
                    text: eliminacion,
                    style: 'fieldValue'
                },
                // Observaciones
                obs8 !== '' ? [
                    {
                        text: 'Observaciones:',
                        style: 'fieldTitle'
                    },
                    {
                        text: obs8,
                        style: 'fieldValue'
                    }
                ] : [],
                // VENTILACIÓN
                {
                    text: '¿El niño/a usa ventilación mecánica?:',
                    style: 'fieldTitle'
                },
                {
                    text: ventilacion,
                    style: 'fieldValue'
                },
                // Observaciones
                obs9 !== '' ? [
                    {
                        text: 'Observaciones:',
                        style: 'fieldTitle'
                    },
                    {
                        text: obs9,
                        style: 'fieldValue'
                    }
                ] : [],
                // ORTESIS
                {
                    text: '¿El niño/a usa ortesis?:',
                    style: 'fieldTitle'
                },
                {
                    text: ortesis,
                    style: 'fieldValue'
                },
                // Observaciones
                obs10 !== '' ? [
                    {
                        text: 'Observaciones:',
                        style: 'fieldTitle'
                    },
                    {
                        text: obs10,
                        style: 'fieldValue'
                    }
                ] : [],
                // JUEGO
                {
                    text: '¿Qué tipo de juego presenta el niño/a?:',
                    style: 'fieldTitle'
                },
                {
                    text: juego,
                    style: 'fieldValue'
                },
                // Observaciones
                obs12 !== '' ? [
                    {
                        text: 'Observaciones:',
                        style: 'fieldTitle'
                    },
                    {
                        text: obs12,
                        style: 'fieldValue'
                    }
                ] : [],

                // Título "CUADRO MÉDICO"
                {
                    text: 'ÁREA CUADRO MÉDICO',
                    style: 'sectionTitle'
                },

                //LINEA DE TÍTULOS
                {
                    canvas: [
                        {
                            type: 'line',
                            x1: 0, y1: 0,
                            x2: 515, y2: 0,
                            lineWidth: 1,
                            lineColor: '#4A90E2'
                        }
                    ],
                    margin: [0, 1, 0, 20]
                },

                // DIAGNÓSTICOS
                {
                    text: '¿Qué diagnóstico/s presenta el niño/a?:',
                    style: 'fieldTitle'
                },
                {
                    text: diagnosticos,
                    style: 'fieldValue'
                },

                // RIESGO VITAL
                {
                    text: '¿El niño/a presenta alguna situación o complejidad de riesgo vital?:',
                    style: 'fieldTitle'
                },
                {
                    text: riesgo_vital,
                    style: 'fieldValue'
                },
                // Observaciones
                obs13 !== '' ? [
                    {
                        text: 'Observaciones:',
                        style: 'fieldTitle'
                    },
                    {
                        text: obs13,
                        style: 'fieldValue'
                    }
                ] : [],

                // FARMACOS
                {
                    text: 'Tratamiento farmacológico actual:',
                    style: 'fieldTitle'
                },
                {
                    text: farmacos,
                    style: 'fieldValue'
                },

                // TRATANTES
                {
                    text: 'Especialistas tratantes y objetivos de terapia/rehabilitación:',
                    style: 'fieldTitle'
                },
                {
                    text: tratantes,
                    style: 'fieldValue'
                },

                // Título "ALIMENTACIÓN"
                {
                    text: 'ÁREA ALIMENTACIÓN',
                    style: 'sectionTitle'
                },

                //LINEA DE TÍTULOS
                {
                    canvas: [
                        {
                            type: 'line',
                            x1: 0, y1: 0,
                            x2: 515, y2: 0,
                            lineWidth: 1,
                            lineColor: '#4A90E2'
                        }
                    ],
                    margin: [0, 1, 0, 20]
                },

                // VIA DE ALIMENTACIÓN
                {
                    text: '¿Qué vía de alimentación utiliza el niño/a?:',
                    style: 'fieldTitle'
                },
                {
                    text: viaAlim,
                    style: 'fieldValue'
                },
                // Observaciones
                obs133 !== '' ? [
                    {
                        text: 'Observaciones:',
                        style: 'fieldTitle'
                    },
                    {
                        text: obs133,
                        style: 'fieldValue'
                    }
                ] : [],

                // TIPO DE ALIMENTACIÓN
                {
                    text: '¿Qué tipo de alimentación utiliza el niño/a?:',
                    style: 'fieldTitle'
                },
                {
                    text: tipoAlim,
                    style: 'fieldValue'
                },
                // Observaciones
                obs14 !== '' ? [
                    {
                        text: 'Observaciones:',
                        style: 'fieldTitle'
                    },
                    {
                        text: obs14,
                        style: 'fieldValue'
                    }
                ] : [],


                // FORMA DE ALIMENTACIÓN
                {
                    text: '¿Cómo se alimenta actualmente el niño/a?:',
                    style: 'fieldTitle'
                },
                {
                    text: formaAlim,
                    style: 'fieldValue'
                },
                // Observaciones
                obs15 !== '' ? [
                    {
                        text: 'Observaciones:',
                        style: 'fieldTitle'
                    },
                    {
                        text: obs15,
                        style: 'fieldValue'
                    }
                ] : [],


                // INDICACIONES DE ALIMENTACIÓN
                {
                    text: '¿Existen indicaciones especiales de alimentación para el niño/a?:',
                    style: 'fieldTitle'
                },
                {
                    text: indicacionesAlim,
                    style: 'fieldValue'
                },

                // Observaciones
                indicacionesAlim === 'Sí' ? [
                    {
                        text: 'Indicaciones especiales de alimentación:',
                        style: 'fieldTitle'
                    },
                    {
                        text: indicacionesAlimWrapper,
                        style: 'fieldValue'
                    }
                ] : [],

                // CONTRAINDICACIONES DE ALIMENTACIÓN
                {
                    text: '¿Existen contraindicaciones de alimentación para el niño/a?:',
                    style: 'fieldTitle'
                },
                {
                    text: contraindicacionesAlim,
                    style: 'fieldValue'
                },

                // Observaciones
                contraindicacionesAlim === 'Sí' ? [
                    {
                        text: 'Contraindicaciones de alimentación:',
                        style: 'fieldTitle'
                    },
                    {
                        text: contraindicacionesAlimWrapper,
                        style: 'fieldValue'
                    }
                ] : [],


                // Título "MOTOR"
                {
                    text: 'ÁREA DESEMPEÑO MOTOR',
                    style: 'sectionTitle'
                },

                //LINEA DE TÍTULOS
                {
                    canvas: [
                        {
                            type: 'line',
                            x1: 0, y1: 0,
                            x2: 515, y2: 0,
                            lineWidth: 1,
                            lineColor: '#4A90E2'
                        }
                    ],
                    margin: [0, 1, 0, 20]
                },


                // POSICIONAMIENTO
                {
                    text: '¿Qué tipo de posicionalmiento actual tiene el niño/a?:',
                    style: 'fieldTitle'
                },
                {
                    text: posicionamiento,
                    style: 'fieldValue'
                },
                // Observaciones
                obs16 !== '' ? [
                    {
                        text: 'Observaciones:',
                        style: 'fieldTitle'
                    },
                    {
                        text: obs16,
                        style: 'fieldValue'
                    }
                ] : [],

                // TIPO DE DESPLAZAMIENTO
                {
                    text: '¿Qué tipo de desplazamiento presenta el niño/a?:',
                    style: 'fieldTitle'
                },
                {
                    text: tipoDesplazamiento,
                    style: 'fieldValue'
                },
                // Observaciones
                obs17 !== '' ? [
                    {
                        text: 'Observaciones:',
                        style: 'fieldTitle'
                    },
                    {
                        text: obs17,
                        style: 'fieldValue'
                    }
                ] : [],
                // CONTROL MOTOR   
                {
                    text: '¿Qué tipo de control motor presenta el niño/a?:',
                    style: 'fieldTitle'
                },
                {
                    text: ctrlCorporal,
                    style: 'fieldValue'
                },
                // Observaciones    
                obs177 !== '' ? [
                    {
                        text: 'Observaciones:',
                        style: 'fieldTitle'
                    },
                    {
                        text: obs177,
                        style: 'fieldValue'
                    }
                ] : [],

                // COMPROMISO MOTOR
                {
                    text: '¿Qué tipo de compromiso motor presenta el niño/a?:',
                    style: 'fieldTitle'
                },
                {
                    text: comprMotor,
                    style: 'fieldValue'
                },
                // Observaciones
                obs18 !== '' ? [
                    {
                        text: 'Observaciones:',
                        style: 'fieldTitle'
                    },
                    {
                        text: obs18,
                        style: 'fieldValue'
                    }
                ] : [],

                // SUGERENCIAS DE MOVILIDAD
                {
                    text: 'Sugerencias y/o indicaciones de  movilidad, posicionamiento:',
                    style: 'fieldTitle'
                },
                {
                    text: sugerenciasMovilidad,
                    style: 'fieldValue'
                },


                // Título "ADAPTACIÓN AL MEDIO"
                {
                    text: 'ÁREA ADAPTACIÓN AL MEDIO',
                    style: 'sectionTitle'
                },

                //LINEA DE TÍTULOS
                {
                    canvas: [
                        {
                            type: 'line',
                            x1: 0, y1: 0,
                            x2: 515, y2: 0,
                            lineWidth: 1,
                            lineColor: '#4A90E2'
                        }
                    ],
                    margin: [0, 1, 0, 20]
                },


                // ADAPTACIÓN A ENTORNOS
                {
                    text: '¿Cómo se describe la capacidad de adaptación  del niño/a a entornos nuevos?:',
                    style: 'fieldTitle'
                },
                {
                    text: adaptacionEntornos,
                    style: 'fieldValue'
                },

                // ADAPTACIÓN A PERSONAS
                {
                    text: '¿Cómo se describe la capacidad de adaptación del niño/a a personas nuevas?:',
                    style: 'fieldTitle'
                },
                {
                    text: adaptacionPersonas,
                    style: 'fieldValue'
                },

                // ADAPTACIÓN GENERAL
                {
                    text: '¿Cómo se describe la capacidad de adaptación general del niño/a?:',
                    style: 'fieldTitle'
                },
                {
                    text: adaptacionGeneral,
                    style: 'fieldValue'
                },

                // GUSTOS
                {
                    text: '¿Qué gustos o preferencias tiene el niño/a?:',
                    style: 'fieldTitle'
                },
                {
                    text: gustos,
                    style: 'fieldValue'
                },

                // TOLERANCIA
                {
                    text: '¿Existen cosas o situaciones que el niño/a no tolere?:',
                    style: 'fieldTitle'
                },
                {
                    text: tolerancia,
                    style: 'fieldValue'
                },

                // Observaciones
                obs188 !== '' ? [
                    {
                        text: 'Observaciones:',
                        style: 'fieldTitle'
                    },
                    {
                        text: obs188,
                        style: 'fieldValue'
                    }
                ] : [],

                // INTERACCIÓN
                {
                    text: '¿El niño/a interactúa, socializa?:',
                    style: 'fieldTitle'
                },
                {
                    text: interaccion,
                    style: 'fieldValue'
                },

                interaccion === 'Si' ? [
                    {
                        text: '¿Principalmente con quién?:',
                        style: 'fieldTitle'
                    },
                    {
                        text: interaccionWrapper,
                        style: 'fieldValue'
                    }
                ] : [],

                //ESCOLARIDAD
                {
                    text: '¿El niño/a ha asistido anteriormente a un establecimiento educativo?:',
                    style: 'fieldTitle'
                },
                {
                    text: escolaridad,
                    style: 'fieldValue'
                },

                // Observaciones
                obs28 !== '' ? [
                    {
                        text: 'Observaciones:',
                        style: 'fieldTitle'
                    },
                    {
                        text: obs28,
                        style: 'fieldValue'
                    }
                ] : [],

                //OBSERVACIONES GENERALES
                {
                    text: 'Observaciones generales:',
                    style: 'fieldTitle'
                },
                {
                    text: obsInteraccion,
                    style: 'fieldValue'
                },

                // Título "capacidad responsiva"
                {
                    text: 'ÁREA RECEPTIVA-RESPONSIVA',
                    style: 'sectionTitle'
                },

                //LINEA DE TÍTULOS

                {
                    canvas: [
                        {
                            type: 'line',
                            x1: 0, y1: 0,
                            x2: 515, y2: 0,
                            lineWidth: 1,
                            lineColor: '#4A90E2'
                        }
                    ],
                    margin: [0, 1, 0, 20]
                },

                // ALTERACIONES SENSORIALES
                {
                    text: '¿El niño/a presenta alteraciones sensoriales?:',
                    style: 'fieldTitle'
                },
                {
                    text: alteracionesSensoriales,
                    style: 'fieldValue'
                },

                // Observaciones
                obs19 !== '' ? [
                    {
                        text: 'Observaciones:',
                        style: 'fieldTitle'
                    },
                    {
                        text: obs19,
                        style: 'fieldValue'
                    }
                ] : [],

                // RESPUESTA sensorial
                {
                    text: '¿Cómo responde el niño/a a los estímulos sensoriales?:',
                    style: 'fieldTitle'
                },
                {
                    text: 'Estímulos visuales:',
                    style: 'fieldTitle'
                },
                {
                    text: respVisual,
                    style: 'fieldValue'
                },
                {
                    text: 'Estímulos auditivos:',
                    style: 'fieldTitle'
                },
                {
                    text: respAudio,
                    style: 'fieldValue'
                },
                {
                    text: 'Estímulos táctiles:',
                    style: 'fieldTitle'
                },
                {
                    text: respTacto,
                    style: 'fieldValue'
                },
                {
                    text: 'Estímulos olfativos:',
                    style: 'fieldTitle'
                },
                {
                    text: respOlfato,
                    style: 'fieldValue'
                },
                {
                    text: 'Estímulos gustativos:',
                    style: 'fieldTitle'
                },
                {
                    text: respGusto,
                    style: 'fieldValue'
                },
                {
                    text: 'Estímulos vestibulares:',
                    style: 'fieldTitle'
                },
                {
                    text: respVestibular,
                    style: 'fieldValue'
                },

                {
                    text: '¿Cómo es su capacidad responsiva general?',
                    style: 'fieldTitle'
                },
                {
                    text: capacidadResponsivaGral,
                    style: 'fieldValue'
                },
                {
                    text: '¿Usa lentes y/o audífonos?',
                    style: 'fieldTitle'
                },
                {
                    text: lentesAudifonos,
                    style: 'fieldValue'
                },
                // Observaciones
                obs20 !== '' ? [
                    {
                        text: 'Observaciones:',
                        style: 'fieldTitle'
                    },
                    {
                        text: obs20,
                        style: 'fieldValue'
                    }
                ] : [],

                {
                    text: '¿Presenta estrabismo?',
                    style: 'fieldTitle'
                },
                {
                    text: estrabismo,
                    style: 'fieldValue'
                }
                // Observaciones
                , obs21 !== '' ? [
                    {
                        text: 'Observaciones:',
                        style: 'fieldTitle'
                    },
                    {
                        text: obs21,
                        style: 'fieldValue'
                    }
                ] : [],

                // Título "D° cognitivo"
                {
                    text: 'ÁREA CONGITIVA-EMOCIONAL-CONDUCTUAL',
                    style: 'sectionTitle'
                },

                //LINEA DE TÍTULOS

                {
                    canvas: [
                        {
                            type: 'line',
                            x1: 0, y1: 0,
                            x2: 515, y2: 0,
                            lineWidth: 1,
                            lineColor: '#4A90E2'
                        }
                    ],
                    margin: [0, 1, 0, 20]
                },

                {
                    text: '¿Cuál es el estado vigil frecuente del niño/a?',
                    style: 'fieldTitle'
                },
                {
                    text: estadoVigil,
                    style: 'fieldValue'
                },
                // Observaciones    
                obs22 !== '' ? [
                    {
                        text: 'Observaciones:',
                        style: 'fieldTitle'
                    },
                    {
                        text: obs22,
                        style: 'fieldValue'
                    }
                ] : [],

                {
                    text: 'Funcionamiento general según función cognitiva:',
                    style: 'fieldTitle'
                },
                {
                    text: 'Percepción:',
                    style: 'fieldTitle'
                },
                {
                    text: percepcion,
                    style: 'fieldValue'
                },
                {
                    text: 'Atención:',
                    style: 'fieldTitle'
                },
                {
                    text: atencion,
                    style: 'fieldValue'
                },
                {
                    text: 'Memoria:',
                    style: 'fieldTitle'
                },
                {
                    text: memoria,
                    style: 'fieldValue'
                },
                {
                    text: 'Psicomotricidad:',
                    style: 'fieldTitle'
                },
                {
                    text: psicomotricidad,
                    style: 'fieldValue'
                },
                {
                    text: 'Lenguaje:',
                    style: 'fieldTitle'
                },
                {
                    text: lenguaje,
                    style: 'fieldValue'
                },
                {
                    text: 'Descripción de los rasgos psicoemocionales generales del niño/a:',
                    style: 'fieldTitle'
                },
                {
                    text: psicoemocional,
                    style: 'fieldValue'
                },
                {
                    text: '¿El niño/a presenta desregulaciones?',
                    style: 'fieldTitle'
                },
                {
                    text: desregulacion,
                    style: 'fieldValue'
                },
                obs23 !== '' ? [
                    {
                        text: 'Observaciones:',
                        style: 'fieldTitle'
                    },
                    {
                        text: obs23,
                        style: 'fieldValue'
                    }
                ] : [],

                {
                    text: 'El niño/a tiene evaluación psicométrica?',
                    style: 'fieldTitle'
                },
                {
                    text: evPsicometrica,
                    style: 'fieldvalue'
                },

                obs24 !== '' ? [
                    {
                        text: 'Observaciones:',
                        style: 'fieldTitle'
                    },
                    {
                        text: obs24,
                        style: 'fieldValue'
                    }
                ] : [],

                {
                    text: '¿Qué tipo de apego manifiesta el niño/a?',
                    style: 'fieldTitle'
                },
                {
                    text: apego,
                    style: 'fieldValue'
                },

                obs25 !== '' ? [
                    {
                        text: 'Observaciones:',
                        style: 'fieldTitle'
                    },
                    {
                        text: obs25,
                        style: 'fieldValue'
                    }
                ] : [],



                // Título "familia"
                {
                    text: 'ÁREA FAMILIA',
                    style: 'sectionTitle'
                },

                //LINEA DE TÍTULOS

                {
                    canvas: [
                        {
                            type: 'line',
                            x1: 0, y1: 0,
                            x2: 515, y2: 0,
                            lineWidth: 1,
                            lineColor: '#4A90E2'
                        }
                    ],
                    margin: [0, 1, 0, 20]
                },

                {
                    text: '¿Quién es el tutor o adulto responsable del niño/a?',
                    style: 'fieldTitle'
                },
                {
                    text: responsable,
                    style: 'fieldValue'
                },

                obs26 !== '' ? [
                    {
                        text: 'Observaciones:',
                        style: 'fieldTitle'
                    },
                    {
                        text: obs26,
                        style: 'fieldValue'
                    }
                ] : [],

                {
                    text: '¿La situación actual del niño/a está catalogada como "caso social"?',
                    style: 'fieldTitle'
                },
                {
                    text: casoSocial,
                    style: 'fieldValue'
                },

                obs27 !== '' ? [
                    {
                        text: 'Observaciones:',
                        style: 'fieldTitle'
                    },
                    {
                        text: obs27,
                        style: 'fieldValue'
                    }
                ] : [],

                {
                    text: '¿Hay familia presente?',
                    style: 'fieldTitle'
                },
                {
                    text: familia,
                    style: 'fieldValue'
                },

                familia === 'Si' ? [
                    {
                        text: 'Composición familiar:',
                        style: 'fieldTitle'
                    },
                    {
                        text: composicionFamiliaWrapper,
                        style: 'fieldValue'
                    },
                    {
                        text: 'Estrato familiar:',
                        style: 'fieldTitle'
                    },
                    {
                        text: estratoFamiliaWrapper,
                        style: 'fieldValue'
                    },
                    {
                        text: 'Interés familiar:',
                        style: 'fieldTitle'
                    },
                    {
                        text: interesFamiliaWrapper,
                        style: 'fieldValue'
                    }
                ] : [],

                {
                    text: 'Comentarios generales',
                    style: 'fieldTitle'
                },
                {
                    text: obsFamilia,
                    style: 'fieldValue'
                }

            ],



            styles: {
                documentTitle: {
                    fontSize: 20,
                    bold: true,
                    alignment: 'center',
                    color: '#2E3B4E',
                    margin: [0, 0, 0, 10]
                },
                introText: {
                    fontSize: 10,
                    alignment: 'justify',
                    margin: [0, 0, 0, 20]
                },
                sectionTitle: {
                    fontSize: 14,
                    bold: true,
                    alignment: 'left',
                    color: '#2E3B4E',
                    margin: [0, 20, 0, 1]
                },
                fieldTitle: {
                    fontSize: 12,
                    bold: true,
                    color: '#2E3B4E',
                    margin: [0, 5, 0, -5]
                },
                fieldValue: {
                    fontSize: 12,
                    color: '#333333',
                    margin: [0, 5, 0, 10]
                }
            },
            pageSize: 'A4',
            pageMargins: [40, 60, 40, 60]
        };

        let nombreArchivo = 'Pauta_Cotejo_Inclusion_Educativa.pdf'; // nombre por defecto

        if (nombre) {
            nombreArchivo = 'PCIE - ' + nombre + '.pdf'; // si el usuario escribió algo, cambia el nombre del archivo
        }

        pdfMake.createPdf(docDefinition).download(nombreArchivo);
    }

    const botonGenerarPDF = document.querySelector('.btn-grad');
    if (botonGenerarPDF) {
        botonGenerarPDF.addEventListener('click', generarPDF);
    }
});
