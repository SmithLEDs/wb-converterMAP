/**
 * @brief   Данная функция создает виртуальное устройство для отображения электрических параметров.
 * @authors SmithLEDs (https://github.com/SmithLEDs/wb-converterMAP.git)
 * @version v.1.0
 * 
 * @param {String}  title           Описание виртуального устройства (Можно на русском)
 * @param {String}  name            Имя виртуального устройства (Будет отображаться в новом виртуальном кстройстве как name/... )
 * @param {Array Object}  targetChannels  Объект, в свойствах которого передаются все топики электрических параметров нагрузки и коэффицент трансформации
 *                                  
 */
function createElectricalChannel ( title , name , targetChannels ) {

    var coefficient = 1;

    // Создаем массив с объектами для однофазной нагрузки
    var mControl = [
        {
            // Urms - Среднеквадратическое значение фазного напряжения
            target: targetChannels.Urms,
            virt: name + "/Urms",
            type: "voltage",
            title: "Напряжение"
        },
        {
            // Upeak - Пиковое значение фазного напряжения 
            target: targetChannels.Upeak,
            virt: name + "/Upeak",
            type: "voltage",
            title: "Напряжение пиковое"
        },
        {
            // Irms - Среднеквадратическое значение фазного тока
            target: targetChannels.Irms,
            virt: name + "/Irms",
            type: "current",
            title: "Ток",
            coef: true
        },
        {
            // Ipeak - Пиковое значение фазного тока
            target: targetChannels.Ipeak,
            virt: name + "/Ipeak",
            type: "current",
            title: "Ток пиковый",
            coef: true
        },
        {
            // P - Активная однофазная мощность
            target: targetChannels.P,
            virt: name + "/P",
            type: "power",
            title: "Активная мощность",
            coef: true
        },
        {
            // Q - Реактивная однофазная мощность 
            target: targetChannels.Q,
            virt: name + "/Q",
            type: "value",
            units: "вар",
            title: "Реактивная мощность",
            coef: true
        },
        {
            // S - Кажущаяся однофазная мощность 
            target: targetChannels.S,
            virt: name + "/S",
            type: "value",
            units: "ВА",
            title: "Кажущаяся мощность",
            coef: true
        },
        {
            // PF - Коэффициент мощности
            target: targetChannels.PF,
            virt: name + "/PF",
            type: "value",
            title: "Коэффициент мощности"
        },
        {
            // AP energy - Активная фазная энергия, прямая 
            target: targetChannels.APenergy,
            virt: name + "/APenergy",
            type: "power_consumption",
            title: "Активная энергия, прямая",
            coef: true
        },
        {
            // AN energy - Активная фазная энергия, обратная  
            target: targetChannels.ANenergy,
            virt: name + "/ANenergy",
            type: "power_consumption",
            title: "Активная энергия, обратная",
            coef: true
        },
        {
            // RP energy - Реактивная фазная энергия, прямая    
            target: targetChannels.RPenergy,
            virt: name + "/RPenergy",
            type: "value",
            units: "кварч",
            title: "Реактивная энергия, прямая",
            coef: true
        },
        {
            // RN energy - Реактивная фазная энергия, обратная   
            target: targetChannels.RNenergy,
            virt: name + "/RNenergy",
            type: "value",
            units: "кварч",
            title: "Реактивная энергия, обратная",
            coef: true
        },
        {
            // Frequency - Частота
            target: targetChannels.Frequency,
            virt: name + "/Frequency",
            type: "value",
            units: "Гц",
            title: "Частота"
        }
    ];
    
    // Создаем массив с объектами для трёхфазной нагрузки
    var mControl3 = [
        {
            // UrmsL1 - Среднеквадратическое значение фазного напряжения L1
            target: targetChannels.UrmsL1,
            virt: name + "/UrmsL1",
            type: "voltage",
            title: "Напряжение L1"
        },
        {
            // UrmsL2 - Среднеквадратическое значение фазного напряжения L2
            target: targetChannels.UrmsL2,
            virt: name + "/UrmsL2",
            type: "voltage",
            title: "Напряжение L2"
        },
        {
            // UrmsL3 - Среднеквадратическое значение фазного напряжения L3
            target: targetChannels.UrmsL3,
            virt: name + "/UrmsL3",
            type: "voltage",
            title: "Напряжение L3"
        },
        {
            // U L1-L2 - Линейное напряжение между фазами L1 и L2
            target: targetChannels.U_L1_L2,
            virt: name + "/U_L1-L2",
            type: "voltage",
            title: "Напряжение L1-L2"
        },
        {
            // U L2-L3 - Линейное напряжение между фазами L2 и L3
            target: targetChannels.U_L2_L3,
            virt: name + "/U_L2-L3",
            type: "voltage",
            title: "Напряжение L2-L3"
        },
        {
            // U L3-L1 - Линейное напряжение между фазами L3 и L1
            target: targetChannels.U_L3_L1,
            virt: name + "/U_L3-L1",
            type: "voltage",
            title: "Напряжение L3-L1"
        },
        {
            // UpeakL1 - Пиковое значение фазного напряжения L1
            target: targetChannels.UpeakL1,
            virt: name + "/UpeakL1",
            type: "voltage",
            title: "Напряжение пиковое L1"
        },
        {
            // UpeakL2 - Пиковое значение фазного напряжения L2
            target: targetChannels.UpeakL2,
            virt: name + "/UpeakL2",
            type: "voltage",
            title: "Напряжение пиковое L2"
        },
        {
            // UpeakL3 - Пиковое значение фазного напряжения L3
            target: targetChannels.UpeakL3,
            virt: name + "/UpeakL3",
            type: "voltage",
            title: "Напряжение пиковое L3"
        },
        {
            // IrmsL1 - Среднеквадратическое значение фазного тока L1
            target: targetChannels.IrmsL1,
            virt: name + "/IrmsL1",
            type: "current",
            title: "Ток L1",
            coef: true
        },
        {
            // IrmsL2 - Среднеквадратическое значение фазного тока L2
            target: targetChannels.IrmsL2,
            virt: name + "/IrmsL2",
            type: "current",
            title: "Ток L2",
            coef: true
        },
        {
            // IrmsL3 - Среднеквадратическое значение фазного тока L3
            target: targetChannels.IrmsL3,
            virt: name + "/IrmsL3",
            type: "current",
            title: "Ток L3",
            coef: true
        },
        {
            // IpeakL1 - Пиковое значение фазного тока L1
            target: targetChannels.IpeakL1,
            virt: name + "/IpeakL1",
            type: "current",
            title: "Ток пиковый L1",
            coef: true
        },
        {
            // IpeakL2 - Пиковое значение фазного тока L2
            target: targetChannels.IpeakL2,
            virt: name + "/IpeakL2",
            type: "current",
            title: "Ток пиковый L2",
            coef: true
        },
        {
            // IpeakL3 - Пиковое значение фазного тока L3
            target: targetChannels.IpeakL3,
            virt: name + "/IpeakL3",
            type: "current",
            title: "Ток пиковый L3",
            coef: true
        },
        {
            // Total P - Активная однофазная мощность по трём фазам
            target: targetChannels.totalP,
            virt: name + "/totalP",
            type: "power",
            title: "Активная мощность по трём фазам",
            coef: true
        },
        {
            // Total Q - Реактивная однофазная мощность по трём фазам 
            target: targetChannels.totalQ,
            virt: name + "/totalQ",
            type: "value",
            units: "вар",
            title: "Реактивная мощность по трём фазам",
            coef: true
        },
        {
            // Total S - Кажущаяся однофазная мощность по трём фазам 
            target: targetChannels.totalS,
            virt: name + "/totalS",
            type: "value",
            units: "ВА",
            title: "Кажущаяся мощность по трём фазам",
            coef: true
        },
        {
            // Total PF - Коэффициент мощности по трём фазам
            target: targetChannels.totalPF,
            virt: name + "/totalPF",
            type: "value",
            title: "Коэффициент мощности по трём фазам"
        },
        {
            // Total AP energy - Активная фазная энергия, прямая по трём фазам
            target: targetChannels.totalAPenergy,
            virt: name + "/totalAPenergy",
            type: "power_consumption",
            title: "Активная энергия, прямая по трём фазам",
            coef: true
        },
        {
            // Total AN energy - Активная фазная энергия, обратная по трём фазам
            target: targetChannels.totalANenergy,
            virt: name + "/totalANenergy",
            type: "power_consumption",
            title: "Активная энергия, обратная по трём фазам",
            coef: true
        },
        {
            // Total RP energy - Реактивная фазная энергия, прямая по трём фазам  
            target: targetChannels.totalRPenergy,
            virt: name + "/totalRPenergy",
            type: "value",
            units: "кварч",
            title: "Реактивная энергия, прямая по трём фазам",
            coef: true
        },
        {
            // Total RN energy - Реактивная фазная энергия, обратная по трём фазам  
            target: targetChannels.totalRNenergy,
            virt: name + "/totalRNenergy",
            type: "value",
            units: "кварч",
            title: "Реактивная энергия, обратная по трём фазам",
            coef: true
        },
        {
            // Frequency - Частота
            target: targetChannels.Frequency,
            virt: name + "/Frequency",
            type: "value",
            units: "Гц",
            title: "Частота"
        }
    ];

    // Проверяем коэффицент трансформации
    if ( targetChannels.coefficient ) {
        if ( typeof targetChannels.coefficient == 'number' ) {
            coefficient = targetChannels.coefficient;
        }
    }

    createVirtualDevice( title , name , coefficient );

    // Проверяем какая нагрузка пришла. Если у объекта присутствуют поля напряжения трёх фаз, то считаем, что это трёхфазная нагрузка
    if ( targetChannels.UrmsL1 && targetChannels.UrmsL2 && targetChannels.UrmsL3 ) {
        addControlDevice( mControl3 , coefficient );
    } else {
        addControlDevice( mControl , coefficient );
    }
    

}


/**
 * @brief   Функция добавляет к виртуальному устройству новые контролы, если они существуют
 * @param {Object} devices   Массив объеков в котором содержатся все параметры со своими свойствами
 * @param {Number} coef      Коэффицент трансформации
 */
function addControlDevice( devices , coef ) {
    devices.forEach( function (device, index) {
        if ( !deviceExists( device.target ) ) return;
        var ctrl = {
            title: device.title, 
            type: device.type,
            value: dev[device.target], 
            readonly: true,   
        };
        if ( device.units ) ctrl.units = device.units;

        // Добавляем новый контрол к устройству
        getDevice(device.virt.split('/')[0]).addControl( device.virt.split('/')[1] , ctrl );

        // Сразу же запишем ошибки, если они есть на контроле
        getControl( device.virt ).setError( getControl( device.target ).getError() );

        // Создаем правила слежения за контролом и его ошибками
        createRuleTracking( device , coef );
        createRuleTrackingError( device );
    });

}


/**
 * @brief   Функция создает новое правило для слежения за изменением нужного контрола
 * @param {Object} devices   Объект, в котором содержатся поля с описанием параметра
 * @param {Number} coef      Коэффицент трансформации
 */
function createRuleTracking( device , coef ) {
    defineRule('createRuleTracking: ' + device.virt, {
        whenChanged: device.target,
        then: function (newValue) { 
            if ( device.coef && coef != 1 ) {
                dev[device.virt] = newValue * coef;
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
    defineRule('createRuleTrackingError: ' + device.virt, {
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
 * @param {Number}  coof    Коэффицент трансформации
 */
function createVirtualDevice( title , name , coof ) {
    defineVirtualDevice( name, {
        title: title,
        cells: {
            coefficient: {
                title: 'Коэффицент трансформации',
                type: "value",
                value: coof,
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
            // Устройство и контрол существуют, можно работать с данным топиком
            exists = true;
        } else {
            log.error("[{}] У устройства {} отсутствует контрол {}", module.filename , device , control);
        }
    } else {
        log.error("[{}] {} - данное устройство отсутствует в системе", module.filename , device);
    }

    return exists;
}


exports.createElectricalChannel  = function( title , name , targetChannels ) {
    setTimeout( function() {
        createElectricalChannel ( title , name , targetChannels );
    }, 10000 );
} 