/**
 * @brief   Модуль создает виртуальное устройство для отображения электрических параметров.
 * @authors SmithLEDs (https://github.com/SmithLEDs/wb-converterMAP.git)
 * @version v.1.1
 * 
 * @param {String}        title           Описание виртуального устройства (Можно на русском)
 * @param {String}        name            Имя виртуального устройства (Будет отображаться в новом 
 *                                        виртуальном кстройстве как name/... )
 * @param {Array Object}  targetChannels  Объект, в свойствах которого передаются все топики 
 *                                        электрических параметров нагрузки и коэффицент трансформации
 *                                  
 */

/**
 * @brief   функция создает виртуальное устройство для отображения электрических параметров.
 * 
 * @param {String} name    Описание виртуального устройства (Можно на русском)
 * @param {Object} target  Объект, в свойствах которого передаются все топики электрических параметров нагрузки и коэффицент трансформации
 * @param {Array}  source  Массив, в который добавятся новые объекты
 *                                  
 */
function createDevicesArray(name, target, source) {

    // Проверяем какая нагрузка пришла. Если у объекта присутствуют поля напряжения трёх фаз, то считаем, что это трёхфазная нагрузка
    if ( target.UrmsL1 && target.UrmsL2 && target.UrmsL3 ) {
        source.push(
            {
                // UrmsL1 - Среднеквадратическое значение фазного напряжения L1
                target: target.UrmsL1,
                virt:   name + "/Urms L1",
                type:   "voltage",
                title:  "Напряжение L1"
            },
            {
                // UrmsL2 - Среднеквадратическое значение фазного напряжения L2
                target: target.UrmsL2,
                virt:   name + "/Urms L2",
                type:   "voltage",
                title:  "Напряжение L2"
            },
            {
                // UrmsL3 - Среднеквадратическое значение фазного напряжения L3
                target: target.UrmsL3,
                virt:   name + "/Urms L3",
                type:   "voltage",
                title:  "Напряжение L3"
            },
            {
                // U L1-L2 - Линейное напряжение между фазами L1 и L2
                target: target.U_L1_L2,
                virt:   name + "/U L1-L2",
                type:   "voltage",
                title:  "Напряжение L1-L2"
            },
            {
                // U L2-L3 - Линейное напряжение между фазами L2 и L3
                target: target.U_L2_L3,
                virt:   name + "/U L2-L3",
                type:   "voltage",
                title:  "Напряжение L2-L3"
            },
            {
                // U L3-L1 - Линейное напряжение между фазами L3 и L1
                target: target.U_L3_L1,
                virt:   name + "/U L3-L1",
                type:   "voltage",
                title:  "Напряжение L3-L1"
            },
            {
                // UpeakL1 - Пиковое значение фазного напряжения L1
                target: target.UpeakL1,
                virt:   name + "/Upeak L1",
                type:   "voltage",
                title:  "Напряжение пиковое L1"
            },
            {
                // UpeakL2 - Пиковое значение фазного напряжения L2
                target: target.UpeakL2,
                virt:   name + "/Upeak L2",
                type:   "voltage",
                title:  "Напряжение пиковое L2"
            },
            {
                // UpeakL3 - Пиковое значение фазного напряжения L3
                target: target.UpeakL3,
                virt:   name + "/Upeak L3",
                type:   "voltage",
                title:  "Напряжение пиковое L3"
            },
            {
                // IrmsL1 - Среднеквадратическое значение фазного тока L1
                target: target.IrmsL1,
                virt:   name + "/Irms L1",
                type:   "current",
                title:  "Ток L1",
                coef:   true
            },
            {
                // IrmsL2 - Среднеквадратическое значение фазного тока L2
                target: target.IrmsL2,
                virt:   name + "/Irms L2",
                type:   "current",
                title:  "Ток L2",
                coef:   true
            },
            {
                // IrmsL3 - Среднеквадратическое значение фазного тока L3
                target: target.IrmsL3,
                virt:   name + "/Irms L3",
                type:   "current",
                title:  "Ток L3",
                coef:   true
            },
            {
                // IpeakL1 - Пиковое значение фазного тока L1
                target: target.IpeakL1,
                virt:   name + "/Ipeak L1",
                type:   "current",
                title:  "Ток пиковый L1",
                coef:   true
            },
            {
                // IpeakL2 - Пиковое значение фазного тока L2
                target: target.IpeakL2,
                virt:   name + "/Ipeak L2",
                type:   "current",
                title:  "Ток пиковый L2",
                coef:   true
            },
            {
                // IpeakL3 - Пиковое значение фазного тока L3
                target: target.IpeakL3,
                virt:   name + "/Ipeak L3",
                type:   "current",
                title:  "Ток пиковый L3",
                coef:   true
            },
            {
                // Total P - Активная однофазная мощность по трём фазам
                target: target.totalP,
                virt:   name + "/Total P",
                type:   "power",
                title:  "Активная мощность по трём фазам",
                coef:   true
            },
            {
                // Total Q - Реактивная однофазная мощность по трём фазам 
                target: target.totalQ,
                virt:   name + "/Total Q",
                type:   "value",
                units:  "вар",
                title:  "Реактивная мощность по трём фазам",
                coef:   true
            },
            {
                // Total S - Кажущаяся однофазная мощность по трём фазам 
                target: target.totalS,
                virt:   name + "/Total S",
                type:   "value",
                units:  "ВА",
                title:  "Кажущаяся мощность по трём фазам",
                coef:   true
            },
            {
                // Total PF - Коэффициент мощности по трём фазам
                target: target.totalPF,
                virt:   name + "/Total PF",
                type:   "value",
                title:  "Коэффициент мощности по трём фазам"
            },
            {
                // Total AP energy - Активная фазная энергия, прямая по трём фазам
                target: target.totalAPenergy,
                virt:   name + "/Total AP energy",
                type:   "power_consumption",
                title:  "Активная энергия, прямая по трём фазам",
                coef:   true
            },
            {
                // Total AN energy - Активная фазная энергия, обратная по трём фазам
                target: target.totalANenergy,
                virt:   name + "/Total AN energy",
                type:   "power_consumption",
                title:  "Активная энергия, обратная по трём фазам",
                coef:   true
            },
            {
                // Total RP energy - Реактивная фазная энергия, прямая по трём фазам  
                target: target.totalRPenergy,
                virt:   name + "/Total RP energy",
                type:   "value",
                units:  "кварч",
                title:  "Реактивная энергия, прямая по трём фазам",
                coef:   true
            },
            {
                // Total RN energy - Реактивная фазная энергия, обратная по трём фазам  
                target: target.totalRNenergy,
                virt:   name + "/Total RN energy",
                type:   "value",
                units:  "кварч",
                title:  "Реактивная энергия, обратная по трём фазам",
                coef:   true
            },
            {
                // Frequency - Частота
                target: target.Frequency,
                virt:   name + "/Frequency",
                type:   "value",
                units:  "Гц",
                title:  "Частота"
            }
        );
    } else {
        source.push(
            {
                // Urms - Среднеквадратическое значение фазного напряжения
                target: target.Urms,
                virt:   name + "/Urms",
                type:   "voltage",
                title:  "Напряжение"
            },
            {
                // Upeak - Пиковое значение фазного напряжения 
                target: target.Upeak,
                virt:   name + "/Upeak",
                type:   "voltage",
                title:  "Напряжение пиковое"
            },
            {
                // Irms - Среднеквадратическое значение фазного тока
                target: target.Irms,
                virt:   name + "/Irms",
                type:   "current",
                title:  "Ток",
                coef:   true
            },
            {
                // Ipeak - Пиковое значение фазного тока
                target: target.Ipeak,
                virt:   name + "/Ipeak",
                type:   "current",
                title:  "Ток пиковый",
                coef:   true
            },
            {
                // P - Активная однофазная мощность
                target: target.P,
                virt:   name + "/P",
                type:   "power",
                title:  "Активная мощность",
                coef:   true
            },
            {
                // Q - Реактивная однофазная мощность 
                target: target.Q,
                virt:   name + "/Q",
                type:   "value",
                units:  "вар",
                title:  "Реактивная мощность",
                coef:   true
            },
            {
                // S - Кажущаяся однофазная мощность 
                target: target.S,
                virt:   name + "/S",
                type:   "value",
                units:  "ВА",
                title:  "Кажущаяся мощность",
                coef:   true
            },
            {
                // PF - Коэффициент мощности
                target: target.PF,
                virt:   name + "/PF",
                type:   "value",
                title:  "Коэффициент мощности"
            },
            {
                // AP energy - Активная фазная энергия, прямая 
                target: target.APenergy,
                virt:   name + "/AP energy",
                type:   "power_consumption",
                title:  "Активная энергия, прямая",
                coef:   true
            },
            {
                // AN energy - Активная фазная энергия, обратная  
                target: target.ANenergy,
                virt:   name + "/AN energy",
                type:   "power_consumption",
                title:  "Активная энергия, обратная",
                coef:   true
            },
            {
                // RP energy - Реактивная фазная энергия, прямая    
                target: target.RPenergy,
                virt:   name + "/RP energy",
                type:   "value",
                units:  "кварч",
                title:  "Реактивная энергия, прямая",
                coef:   true
            },
            {
                // RN energy - Реактивная фазная энергия, обратная   
                target: target.RNenergy,
                virt:   name + "/RN energy",
                type:   "value",
                units:  "кварч",
                title:  "Реактивная энергия, обратная",
                coef:   true
            },
            {
                // Frequency - Частота
                target: target.Frequency,
                virt:   name + "/Frequency",
                type:   "value",
                units:  "Гц",
                title:  "Частота"
            }
        );
    }  
}



/**
 * @brief   Добавляет к виртуальному устройству новые контролы, если они существуют
 * @param {Object} devices     Массив объеков в котором содержатся все параметры со своими свойствами
 * @param {Number} coefficient Коэффицент трансформации тока
 */
function addControlDevice( devices , coefficient ) {
    devices.forEach( function (device) {
        if ( !deviceExists( device.target ) ) return;
        var ctrl = {
            title: device.title, 
            type: device.type,
            value: dev[device.target], 
            readonly: true,  
            forceDefault: true 
        };
        if ( device.units ) ctrl.units = device.units;

        // Добавляем новый контрол к устройству
        getDevice(device.virt.split('/')[0]).addControl( device.virt.split('/')[1] , ctrl );
        
        // Сразу же запишем ошибки, если они есть на контроле
        getControl( device.virt ).setError( getControl( device.target ).getError() );

        // Создаем правила слежения за контролом и его ошибками
        createRuleTracking( device , coefficient);
        createRuleTrackingError( device );
    });

}


/**
 * @brief   Функция создает новое правило для слежения за изменением нужного контрола
 * @param {Object} devices     Объект, в котором содержатся поля с описанием параметра
 * @param {Number} coefficient Коэффицент трансформации тока
 */
function createRuleTracking( device , coefficient ) {
    defineRule(device.virt.split('/')[0]+ "_" + device.virt.split('/')[1], {
        whenChanged: device.target,
        then: function (newValue) { 
            if ( device.coef && coefficient != 1 ) {
                dev[device.virt] = newValue * coefficient;
            } else {
                dev[device.virt] = newValue; 
            }  
        }
    });
}


/**
 * @brief   Функция создает новое правило для слежения за изменением поля meta #error нужного контрола
 * @param {Object} devices   Объект, в котором содержатся поля с описанием параметра
 */
function createRuleTrackingError( device ) {
    defineRule(device.virt.split('/')[0]+ "_" + device.virt.split('/')[1] + "_ERROR", {
        whenChanged: device.target + "#error",
        then: function (newValue) {   
            dev[device.virt + "#error"] = newValue;      
        }
    });
}

/**
 * @brief   Функция создания виртуального устройства.
 *          В дальнейшем к этому устройству добавляются дополнительные контролы
 * @param {String}  title   Описание виртуального устройства (Можно на русском)
 * @param {String}  name    Имя виртуального устройства (Будет отображаться в новом виртуальном кстройстве как name/... )
 * @param {Number}  coefficient Коэффицент трансформации тока
 */
function createVirtualDevice( title , name , coefficient ) {
    defineVirtualDevice( name, {
        title: title,
        cells: {
            coefficient: {
                title: 'Коэффицент трансформации',
                type: "value",
                value: coefficient,
                readonly: true,
                forceDefault: true
            }
        }
    });
}


/**
 * @brief   Функция проверяет на существование устройства и его контрола.
 * 
 * @param {String} topic Топик для проверки типа "device/control"
 */
function deviceExists( topic ) {
    if ( topic == undefined ) return;
    var device  = topic.split('/')[0];
    var control = topic.split('/')[1];
    var exists = false;

    if ( getDevice(device) !== undefined ) {
        if ( getDevice(device).isControlExists(control) ) {
            exists = true;
        } 
    } 

    return exists;
}


exports.createElectricalChannel  = function( title , name , targetChannels ) {
    log.warning('[' + title + ']: Перезагрузка модуля, ожидание устройств...');
 
    var arrayDevices = [];      // Массив для объектов
    var coefficient = 1;

    // Проверяем коэффицент трансформации
    if ( targetChannels.coefficient ) {
        if ( typeof targetChannels.coefficient == 'number' ) {
            coefficient = targetChannels.coefficient;
        }
    }

    createVirtualDevice( title , name , coefficient);

    var test_interval = null;
    var i = 0;
    var qty = 60;

    createDevicesArray(name, targetChannels, arrayDevices);

    test_interval = setInterval(function () {
        var loadDivicesOK = true;
        ++i;

        for (var k = 0, l = arrayDevices.length; k<l; ++k) {
            if ( !deviceExists(arrayDevices[k].target) ) {
                loadDivicesOK = false;
                break;
            }
        }
        
        // Если все устройства существуют или закончилось кол-во попыток проверок
        if ( loadDivicesOK || (i > qty) ) {
            clearInterval(test_interval);
            addControlDevice( arrayDevices , coefficient );
        }

      }, 5000);  
} 