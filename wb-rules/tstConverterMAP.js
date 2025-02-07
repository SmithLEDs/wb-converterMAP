var electricalChannel = require('moduleConverterMAP');  // Подключаем наш модуль

// Создаем объект для однофазной нагрузки
var target1Phase = {
    coefficient: 1,
    Urms: 'wb-map3e_165/Urms L1',
    Upeak: 'wb-map3e_165/Upeak L1',
    Irms: 'wb-map3e_165/Irms L1',
    Ipeak: 'wb-map3e_165/Ipeak L1',
    P: 'wb-map3e_165/P L1',
    Q: 'wb-map3e_165/Q L1',
    S: 'wb-map3e_165/S L1',
    PF: 'wb-map3e_165/PF L1',
    APenergy: 'wb-map3e_165/AP energy L1',
    ANenergy: 'wb-map3e_165/AN energy L1',
    RPenergy: 'wb-map3e_165/RP energy L1',
    RNenergy: 'wb-map3e_165/RN energy L1',
    Frequency: 'wb-map3e_165/Frequency'
};

// Вызываем функцию создания нового виртуального устройства, где указываем:
// 'QF6 Холодильник' - удобочитаемое имя 
// 'QF6' - имя устройства 
// target1Phase - Объект с свойствами электрических параметров
electricalChannel.createElectricalChannel('QF6 Холодильник' , 'QF6' , target1Phase );

// Создаем объект для трёхфазной нагрузки
var target3Phase = {
    coefficient: 1,
    UrmsL1: 'wb-map3e_165/Urms L1',
    UrmsL2: 'wb-map3e_165/Urms L2',
    UrmsL3: 'wb-map3e_165/Urms L3',
    U_L1_L2: 'wb-map3e_165/U L1-L2',
    U_L2_L3: 'wb-map3e_165/U L2-L3',
    U_L3_L1: 'wb-map3e_165/U L3-L1',
    UpeakL1: 'wb-map3e_165/Upeak L1',
    UpeakL2: 'wb-map3e_165/Upeak L2',
    UpeakL3: 'wb-map3e_165/Upeak L3',
    IrmsL1: 'wb-map3e_165/Irms L1',
    IrmsL2: 'wb-map3e_165/Irms L2',
    IrmsL3: 'wb-map3e_165/Irms L3',
    IpeakL1: 'wb-map3e_165/Ipeak L1',
    IpeakL2: 'wb-map3e_165/Ipeak L2',
    IpeakL3: 'wb-map3e_165/Ipeak L3',
    totalP: 'wb-map3e_165/Total P',
    totalQ: 'wb-map3e_165/Total Q',
    totalS: 'wb-map3e_165/Total S',
    totalPF: 'wb-map3e_165/Total PF',
    totalAPenergy: 'wb-map3e_165/Total AP energy',
    totalANenergy: 'wb-map3e_165/Total AN energy',
    totalRPenergy: 'wb-map3e_165/Total RP energy',
    totalRNenergy: 'wb-map3e_165/Total RN energy',
    Frequency: 'wb-map3e_165/Frequency'
};

// Вызываем функцию создания нового виртуального устройства
electricalChannel.createElectricalChannel('Ввод №1' , 'QF1_vvod1' , target3Phase );