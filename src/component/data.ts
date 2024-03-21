export interface Patient {
  date: Date;
  admitted: number;
  treatment: number;
  recovered: number;
}

export interface DataItem {
  humidity: number;
  temperature: number;
  pressure: number;
  timestamp: Date;
  urination: boolean;
  patientCondition: boolean;
}

export interface PieChartData {
  category: string;
  value: number;
}

export const hospitalData = [
  {
    value: "0",
    patientsData: [
      {
        date: new Date(1702944000000),
        admitted: 10,
        treatment: 10,
        recovered: 9,
      },
      {
        date: new Date(1703030400000),
        admitted: 1,
        treatment: 7,
        recovered: 2,
      },
      {
        date: new Date(1703116800000),
        admitted: 17,
        treatment: 15,
        recovered: 18,
      },
      {
        date: new Date(1703203200000),
        admitted: 14,
        treatment: 8,
        recovered: 28,
      },
      {
        date: new Date(1703289600000),
        admitted: 7,
        treatment: 0,
        recovered: 3,
      },
      {
        date: new Date(1703376000000),
        admitted: 3,
        treatment: 10,
        recovered: 6,
      },
      {
        date: new Date(1703462400000),
        admitted: 7,
        treatment: 16,
        recovered: 7,
      },
      {
        date: new Date(1703548800000),
        admitted: 2,
        treatment: 11,
        recovered: 47,
      },
      {
        date: new Date(1703635200000),
        admitted: 5,
        treatment: 13,
        recovered: 32,
      },
      {
        date: new Date(1703721600000),
        admitted: 14,
        treatment: 32,
        recovered: 4,
      },
      {
        date: new Date(1703808000000),
        admitted: 38,
        treatment: 0,
        recovered: 12,
      },
      {
        date: new Date(1703894400000),
        admitted: 5,
        treatment: 6,
        recovered: 9,
      },
      {
        date: new Date(1703980800000),
        admitted: 5,
        treatment: 5,
        recovered: 0,
      },
      {
        date: new Date(1704067200000),
        admitted: 4,
        treatment: 4,
        recovered: 2,
      },
      {
        date: new Date(1704153600000),
        admitted: 26,
        treatment: 7,
        recovered: 17,
      },
      {
        date: new Date(1704240000000),
        admitted: 28,
        treatment: 18,
        recovered: 4,
      },
      {
        date: new Date(1704326400000),
        admitted: 17,
        treatment: 5,
        recovered: 33,
      },
      {
        date: new Date(1704412800000),
        admitted: 48,
        treatment: 0,
        recovered: 2,
      },
    ],
    bodyTemperatureMockData: [
      { timestamp: new Date("2024-01-22T00:00:00"), temperature: 36.5 },
      { timestamp: new Date("2024-01-22T01:00:00"), temperature: 36.8 },
      { timestamp: new Date("2024-01-22T02:00:00"), temperature: 37.2 },
      { timestamp: new Date("2024-01-22T03:00:00"), temperature: 36.9 },
      { timestamp: new Date("2024-01-22T04:00:00"), temperature: 37.5 },
      { timestamp: new Date("2024-01-22T05:00:00"), temperature: 38.0 },
      { timestamp: new Date("2024-01-22T06:00:00"), temperature: 38.2 },
      { timestamp: new Date("2024-01-22T07:00:00"), temperature: 37.8 },
      { timestamp: new Date("2024-01-22T08:00:00"), temperature: 36.7 },
      { timestamp: new Date("2024-01-22T09:00:00"), temperature: 36.3 },
      { timestamp: new Date("2024-01-22T10:00:00"), temperature: 36.8 },
      { timestamp: new Date("2024-01-22T11:00:00"), temperature: 37.1 },
      { timestamp: new Date("2024-01-22T12:00:00"), temperature: 37.6 },
      { timestamp: new Date("2024-01-22T13:00:00"), temperature: 38.0 },
      { timestamp: new Date("2024-01-22T14:00:00"), temperature: 38.3 },
      { timestamp: new Date("2024-01-22T15:00:00"), temperature: 37.9 },
      { timestamp: new Date("2024-01-22T16:00:00"), temperature: 37.2 },
      { timestamp: new Date("2024-01-22T17:00:00"), temperature: 36.8 },
      { timestamp: new Date("2024-01-22T18:00:00"), temperature: 36.4 },
      { timestamp: new Date("2024-01-22T19:00:00"), temperature: 36.9 },
      { timestamp: new Date("2024-01-22T20:00:00"), temperature: 37.3 },
      { timestamp: new Date("2024-01-22T21:00:00"), temperature: 37.8 },
      { timestamp: new Date("2024-01-22T22:00:00"), temperature: 38.1 },
      { timestamp: new Date("2024-01-22T23:00:00"), temperature: 37.7 },
    ],
    data: [
      {
        humidity: 5,
        temperature: 60,
        pressure: 30,
        timestamp: new Date("2023-01-01T08:00:00.000Z"),
        urination: false,
        patientCondition: false,
      },
      {
        humidity: 15,
        temperature: 5,
        pressure: 40,
        timestamp: new Date("2023-01-01T09:00:00.000Z"),
        urination: true,
        patientCondition: false,
      },
      {
        humidity: 8,
        temperature: 70,
        pressure: 65,
        timestamp: new Date("2023-01-01T10:00:00.000Z"),
        urination: false,
        patientCondition: false,
      },
      {
        humidity: 18,
        temperature: 25,
        pressure: 45,
        timestamp: new Date("2023-01-01T11:00:00.000Z"),
        urination: false,
        patientCondition: false,
      },
      {
        humidity: 60,
        temperature: 80,
        pressure: 50,
        timestamp: new Date("2023-01-01T12:00:00.000Z"),
        urination: false,
        patientCondition: true,
      },
      {
        humidity: 20,
        temperature: 45,
        pressure: 55,
        timestamp: new Date("2023-01-01T13:00:00.000Z"),
        urination: true,
        patientCondition: false,
      },
      {
        humidity: 8,
        temperature: 60,
        pressure: 90,
        timestamp: new Date("2023-01-01T14:00:00.000Z"),
        urination: false,
        patientCondition: true,
      },
      {
        humidity: 16,
        temperature: 35,
        pressure: 30,
        timestamp: new Date("2023-01-01T15:00:00.000Z"),
        urination: true,
        patientCondition: false,
      },
      {
        humidity: 54,
        temperature: 10,
        pressure: 20,
        timestamp: new Date("2023-01-01T16:00:00.000Z"),
        urination: false,
        patientCondition: true,
      },
      {
        humidity: 10,
        temperature: 98,
        pressure: 15,
        timestamp: new Date("2023-01-01T17:00:00.000Z"),
        urination: false,
        patientCondition: false,
      },
    ],
    pieChartData: [
      { category: "Male", value: 35 },
      { category: "Female", value: 65 },
    ],
  },
  {
    value: "1",
    patientsData: [
      {
        date: new Date(1702944000000),
        admitted: 8,
        treatment: 10,
        recovered: 9,
      },
      {
        date: new Date(1703030400000),
        admitted: 1,
        treatment: 17,
        recovered: 20,
      },
      {
        date: new Date(1703116800000),
        admitted: 7,
        treatment: 25,
        recovered: 1,
      },
      {
        date: new Date(1703203200000),
        admitted: 4,
        treatment: 18,
        recovered: 8,
      },
      {
        date: new Date(1703289600000),
        admitted: 17,
        treatment: 10,
        recovered: 30,
      },
      {
        date: new Date(1703376000000),
        admitted: 30,
        treatment: 10,
        recovered: 6,
      },
      {
        date: new Date(1703462400000),
        admitted: 7,
        treatment: 16,
        recovered: 7,
      },
      {
        date: new Date(1703548800000),
        admitted: 20,
        treatment: 1,
        recovered: 37,
      },
      {
        date: new Date(1703635200000),
        admitted: 15,
        treatment: 23,
        recovered: 22,
      },
      {
        date: new Date(1703721600000),
        admitted: 1,
        treatment: 32,
        recovered: 14,
      },
      {
        date: new Date(1703808000000),
        admitted: 8,
        treatment: 20,
        recovered: 1,
      },
      {
        date: new Date(1703894400000),
        admitted: 15,
        treatment: 16,
        recovered: 19,
      },
      {
        date: new Date(1703980800000),
        admitted: 15,
        treatment: 15,
        recovered: 30,
      },
      {
        date: new Date(1704067200000),
        admitted: 24,
        treatment: 14,
        recovered: 22,
      },
      {
        date: new Date(1704153600000),
        admitted: 36,
        treatment: 27,
        recovered: 7,
      },
      {
        date: new Date(1704240000000),
        admitted: 38,
        treatment: 38,
        recovered: 14,
      },
      {
        date: new Date(1704326400000),
        admitted: 37,
        treatment: 15,
        recovered: 43,
      },
      {
        date: new Date(1704412800000),
        admitted: 38,
        treatment: 10,
        recovered: 32,
      },
    ],
    bodyTemperatureMockData: [
      { timestamp: new Date("2024-01-22T00:00:00"), temperature: 35.5 },
      { timestamp: new Date("2024-01-22T01:00:00"), temperature: 35.2 },
      { timestamp: new Date("2024-01-22T02:00:00"), temperature: 37.2 },
      { timestamp: new Date("2024-01-22T03:00:00"), temperature: 38.9 },
      { timestamp: new Date("2024-01-22T04:00:00"), temperature: 35.5 },
      { timestamp: new Date("2024-01-22T05:00:00"), temperature: 37.0 },
      { timestamp: new Date("2024-01-22T06:00:00"), temperature: 36.2 },
      { timestamp: new Date("2024-01-22T07:00:00"), temperature: 35.8 },
      { timestamp: new Date("2024-01-22T08:00:00"), temperature: 36.7 },
      { timestamp: new Date("2024-01-22T09:00:00"), temperature: 38.3 },
      { timestamp: new Date("2024-01-22T10:00:00"), temperature: 36.8 },
      { timestamp: new Date("2024-01-22T11:00:00"), temperature: 37.1 },
      { timestamp: new Date("2024-01-22T12:00:00"), temperature: 35.6 },
      { timestamp: new Date("2024-01-22T13:00:00"), temperature: 37.0 },
      { timestamp: new Date("2024-01-22T14:00:00"), temperature: 35.3 },
      { timestamp: new Date("2024-01-22T15:00:00"), temperature: 37.9 },
      { timestamp: new Date("2024-01-22T16:00:00"), temperature: 34.2 },
      { timestamp: new Date("2024-01-22T17:00:00"), temperature: 36.8 },
      { timestamp: new Date("2024-01-22T18:00:00"), temperature: 35.4 },
      { timestamp: new Date("2024-01-22T19:00:00"), temperature: 37.9 },
      { timestamp: new Date("2024-01-22T20:00:00"), temperature: 38.3 },
      { timestamp: new Date("2024-01-22T21:00:00"), temperature: 36.8 },
      { timestamp: new Date("2024-01-22T22:00:00"), temperature: 35.1 },
      { timestamp: new Date("2024-01-22T23:00:00"), temperature: 36.7 },
    ],
    data: [
      {
        humidity: 35,
        temperature: 40,
        pressure: 40,
        timestamp: new Date("2023-01-01T08:00:00.000Z"),
        urination: false,
        patientCondition: false,
      },
      {
        humidity: 35,
        temperature: 45,
        pressure: 30,
        timestamp: new Date("2023-01-01T09:00:00.000Z"),
        urination: true,
        patientCondition: false,
      },
      {
        humidity: 28,
        temperature: 50,
        pressure: 35,
        timestamp: new Date("2023-01-01T10:00:00.000Z"),
        urination: false,
        patientCondition: false,
      },
      {
        humidity: 38,
        temperature: 25,
        pressure: 35,
        timestamp: new Date("2023-01-01T11:00:00.000Z"),
        urination: false,
        patientCondition: false,
      },
      {
        humidity: 40,
        temperature: 60,
        pressure: 80,
        timestamp: new Date("2023-01-01T12:00:00.000Z"),
        urination: false,
        patientCondition: true,
      },
      {
        humidity: 20,
        temperature: 45,
        pressure: 55,
        timestamp: new Date("2023-01-01T13:00:00.000Z"),
        urination: true,
        patientCondition: false,
      },
      {
        humidity: 67,
        temperature: 20,
        pressure: 50,
        timestamp: new Date("2023-01-01T14:00:00.000Z"),
        urination: false,
        patientCondition: true,
      },
      {
        humidity: 26,
        temperature: 35,
        pressure: 30,
        timestamp: new Date("2023-01-01T15:00:00.000Z"),
        urination: true,
        patientCondition: false,
      },
      {
        humidity: 34,
        temperature: 30,
        pressure: 40,
        timestamp: new Date("2023-01-01T16:00:00.000Z"),
        urination: false,
        patientCondition: true,
      },
      {
        humidity: 40,
        temperature: 48,
        pressure: 45,
        timestamp: new Date("2023-01-01T17:00:00.000Z"),
        urination: false,
        patientCondition: false,
      },
    ],
    pieChartData: [
      { category: "Male", value: 25 },
      { category: "Female", value: 75 },
    ],
  },
  {
    value: "2",
    patientsData: [
      {
        date: new Date(1702944000000),
        admitted: 40,
        treatment: 40,
        recovered: 19,
      },
      {
        date: new Date(1703030400000),
        admitted: 0,
        treatment: 37,
        recovered: 12,
      },
      {
        date: new Date(1703116800000),
        admitted: 47,
        treatment: 25,
        recovered: 8,
      },
      {
        date: new Date(1703203200000),
        admitted: 24,
        treatment: 8,
        recovered: 8,
      },
      {
        date: new Date(1703289600000),
        admitted: 17,
        treatment: 10,
        recovered: 13,
      },
      {
        date: new Date(1703376000000),
        admitted: 20,
        treatment: 20,
        recovered: 26,
      },
      {
        date: new Date(1703462400000),
        admitted: 47,
        treatment: 36,
        recovered: 7,
      },
      {
        date: new Date(1703548800000),
        admitted: 12,
        treatment: 21,
        recovered: 27,
      },
      {
        date: new Date(1703635200000),
        admitted: 5,
        treatment: 43,
        recovered: 42,
      },
      {
        date: new Date(1703721600000),
        admitted: 34,
        treatment: 32,
        recovered: 14,
      },
      {
        date: new Date(1703808000000),
        admitted: 28,
        treatment: 20,
        recovered: 22,
      },
      {
        date: new Date(1703894400000),
        admitted: 45,
        treatment: 16,
        recovered: 39,
      },
      {
        date: new Date(1703980800000),
        admitted: 35,
        treatment: 5,
        recovered: 10,
      },
      {
        date: new Date(1704067200000),
        admitted: 64,
        treatment: 24,
        recovered: 0,
      },
      {
        date: new Date(1704153600000),
        admitted: 26,
        treatment: 47,
        recovered: 7,
      },
      {
        date: new Date(1704240000000),
        admitted: 38,
        treatment: 38,
        recovered: 14,
      },
      {
        date: new Date(1704326400000),
        admitted: 47,
        treatment: 25,
        recovered: 33,
      },
      {
        date: new Date(1704412800000),
        admitted: 18,
        treatment: 0,
        recovered: 20,
      },
    ],
    bodyTemperatureMockData: [
      { timestamp: new Date("2024-01-22T00:00:00"), temperature: 35.5 },
      { timestamp: new Date("2024-01-22T01:00:00"), temperature: 34.8 },
      { timestamp: new Date("2024-01-22T02:00:00"), temperature: 36.2 },
      { timestamp: new Date("2024-01-22T03:00:00"), temperature: 35.9 },
      { timestamp: new Date("2024-01-22T04:00:00"), temperature: 34.5 },
      { timestamp: new Date("2024-01-22T05:00:00"), temperature: 35.0 },
      { timestamp: new Date("2024-01-22T06:00:00"), temperature: 36.2 },
      { timestamp: new Date("2024-01-22T07:00:00"), temperature: 37.8 },
      { timestamp: new Date("2024-01-22T08:00:00"), temperature: 34.7 },
      { timestamp: new Date("2024-01-22T09:00:00"), temperature: 34.3 },
      { timestamp: new Date("2024-01-22T10:00:00"), temperature: 34.8 },
      { timestamp: new Date("2024-01-22T11:00:00"), temperature: 35.1 },
      { timestamp: new Date("2024-01-22T12:00:00"), temperature: 35.6 },
      { timestamp: new Date("2024-01-22T13:00:00"), temperature: 36.0 },
      { timestamp: new Date("2024-01-22T14:00:00"), temperature: 35.3 },
      { timestamp: new Date("2024-01-22T15:00:00"), temperature: 34.9 },
      { timestamp: new Date("2024-01-22T16:00:00"), temperature: 36.2 },
      { timestamp: new Date("2024-01-22T17:00:00"), temperature: 35.8 },
      { timestamp: new Date("2024-01-22T18:00:00"), temperature: 35.4 },
      { timestamp: new Date("2024-01-22T19:00:00"), temperature: 34.9 },
      { timestamp: new Date("2024-01-22T20:00:00"), temperature: 35.3 },
      { timestamp: new Date("2024-01-22T21:00:00"), temperature: 36.8 },
      { timestamp: new Date("2024-01-22T22:00:00"), temperature: 35.1 },
      { timestamp: new Date("2024-01-22T23:00:00"), temperature: 34.7 },
    ],
    data: [
      {
        humidity: 15,
        temperature: 50,
        pressure: 20,
        timestamp: new Date("2023-01-01T08:00:00.000Z"),
        urination: false,
        patientCondition: false,
      },
      {
        humidity: 25,
        temperature: 15,
        pressure: 30,
        timestamp: new Date("2023-01-01T09:00:00.000Z"),
        urination: true,
        patientCondition: false,
      },
      {
        humidity: 18,
        temperature: 60,
        pressure: 55,
        timestamp: new Date("2023-01-01T10:00:00.000Z"),
        urination: false,
        patientCondition: false,
      },
      {
        humidity: 28,
        temperature: 35,
        pressure: 35,
        timestamp: new Date("2023-01-01T11:00:00.000Z"),
        urination: false,
        patientCondition: false,
      },
      {
        humidity: 20,
        temperature: 40,
        pressure: 20,
        timestamp: new Date("2023-01-01T12:00:00.000Z"),
        urination: false,
        patientCondition: true,
      },
      {
        humidity: 40,
        temperature: 35,
        pressure: 25,
        timestamp: new Date("2023-01-01T13:00:00.000Z"),
        urination: true,
        patientCondition: false,
      },
      {
        humidity: 18,
        temperature: 40,
        pressure: 60,
        timestamp: new Date("2023-01-01T14:00:00.000Z"),
        urination: false,
        patientCondition: true,
      },
      {
        humidity: 36,
        temperature: 45,
        pressure: 20,
        timestamp: new Date("2023-01-01T15:00:00.000Z"),
        urination: true,
        patientCondition: false,
      },
      {
        humidity: 44,
        temperature: 50,
        pressure: 20,
        timestamp: new Date("2023-01-01T16:00:00.000Z"),
        urination: false,
        patientCondition: true,
      },
      {
        humidity: 40,
        temperature: 78,
        pressure: 45,
        timestamp: new Date("2023-01-01T17:00:00.000Z"),
        urination: false,
        patientCondition: false,
      },
    ],
    pieChartData: [
      { category: "Male", value: 25 },
      { category: "Female", value: 75 },
    ],
  },
  {
    value: "3",
    patientsData: [
      {
        date: new Date(1702944000000),
        admitted: 12,
        treatment: 20,
        recovered: 19,
      },
      {
        date: new Date(1703030400000),
        admitted: 12,
        treatment: 17,
        recovered: 23,
      },
      {
        date: new Date(1703116800000),
        admitted: 7,
        treatment: 25,
        recovered: 38,
      },
      {
        date: new Date(1703203200000),
        admitted: 24,
        treatment: 18,
        recovered: 8,
      },
      {
        date: new Date(1703289600000),
        admitted: 12,
        treatment: 1,
        recovered: 2,
      },
      {
        date: new Date(1703376000000),
        admitted: 13,
        treatment: 10,
        recovered: 6,
      },
      {
        date: new Date(1703462400000),
        admitted: 17,
        treatment: 6,
        recovered: 17,
      },
      {
        date: new Date(1703548800000),
        admitted: 21,
        treatment: 1,
        recovered: 27,
      },
      {
        date: new Date(1703635200000),
        admitted: 1,
        treatment: 23,
        recovered: 2,
      },
      {
        date: new Date(1703721600000),
        admitted: 34,
        treatment: 22,
        recovered: 41,
      },
      {
        date: new Date(1703808000000),
        admitted: 38,
        treatment: 10,
        recovered: 2,
      },
      {
        date: new Date(1703894400000),
        admitted: 15,
        treatment: 26,
        recovered: 19,
      },
      {
        date: new Date(1703980800000),
        admitted: 25,
        treatment: 15,
        recovered: 10,
      },
      {
        date: new Date(1704067200000),
        admitted: 24,
        treatment: 14,
        recovered: 22,
      },
      {
        date: new Date(1704153600000),
        admitted: 21,
        treatment: 17,
        recovered: 7,
      },
      {
        date: new Date(1704240000000),
        admitted: 8,
        treatment: 18,
        recovered: 34,
      },
      {
        date: new Date(1704326400000),
        admitted: 47,
        treatment: 15,
        recovered: 3,
      },
      {
        date: new Date(1704412800000),
        admitted: 28,
        treatment: 10,
        recovered: 21,
      },
    ],
    bodyTemperatureMockData: [
      { timestamp: new Date("2024-01-22T00:00:00"), temperature: 36.5 },
      { timestamp: new Date("2024-01-22T01:00:00"), temperature: 36.8 },
      { timestamp: new Date("2024-01-22T02:00:00"), temperature: 37.2 },
      { timestamp: new Date("2024-01-22T03:00:00"), temperature: 36.9 },
      { timestamp: new Date("2024-01-22T04:00:00"), temperature: 37.5 },
      { timestamp: new Date("2024-01-22T05:00:00"), temperature: 38.0 },
      { timestamp: new Date("2024-01-22T06:00:00"), temperature: 38.2 },
      { timestamp: new Date("2024-01-22T07:00:00"), temperature: 37.8 },
      { timestamp: new Date("2024-01-22T08:00:00"), temperature: 36.7 },
      { timestamp: new Date("2024-01-22T09:00:00"), temperature: 36.3 },
      { timestamp: new Date("2024-01-22T10:00:00"), temperature: 36.8 },
      { timestamp: new Date("2024-01-22T11:00:00"), temperature: 37.1 },
      { timestamp: new Date("2024-01-22T12:00:00"), temperature: 37.6 },
      { timestamp: new Date("2024-01-22T13:00:00"), temperature: 38.0 },
      { timestamp: new Date("2024-01-22T14:00:00"), temperature: 38.3 },
      { timestamp: new Date("2024-01-22T15:00:00"), temperature: 37.9 },
      { timestamp: new Date("2024-01-22T16:00:00"), temperature: 37.2 },
      { timestamp: new Date("2024-01-22T17:00:00"), temperature: 36.8 },
      { timestamp: new Date("2024-01-22T18:00:00"), temperature: 36.4 },
      { timestamp: new Date("2024-01-22T19:00:00"), temperature: 36.9 },
      { timestamp: new Date("2024-01-22T20:00:00"), temperature: 37.3 },
      { timestamp: new Date("2024-01-22T21:00:00"), temperature: 37.8 },
      { timestamp: new Date("2024-01-22T22:00:00"), temperature: 38.1 },
      { timestamp: new Date("2024-01-22T23:00:00"), temperature: 37.7 },
    ],
    data: [
      {
        humidity: 5,
        temperature: 60,
        pressure: 30,
        timestamp: new Date("2023-01-01T08:00:00.000Z"),
        urination: false,
        patientCondition: false,
      },
      {
        humidity: 15,
        temperature: 5,
        pressure: 40,
        timestamp: new Date("2023-01-01T09:00:00.000Z"),
        urination: true,
        patientCondition: false,
      },
      {
        humidity: 8,
        temperature: 70,
        pressure: 65,
        timestamp: new Date("2023-01-01T10:00:00.000Z"),
        urination: false,
        patientCondition: false,
      },
      {
        humidity: 18,
        temperature: 25,
        pressure: 45,
        timestamp: new Date("2023-01-01T11:00:00.000Z"),
        urination: false,
        patientCondition: false,
      },
      {
        humidity: 50,
        temperature: 60,
        pressure:30,
        timestamp: new Date("2023-01-01T12:00:00.000Z"),
        urination: false,
        patientCondition: true,
      },
      {
        humidity: 10,
        temperature: 25,
        pressure: 45,
        timestamp: new Date("2023-01-01T13:00:00.000Z"),
        urination: true,
        patientCondition: false,
      },
      {
        humidity: 18,
        temperature: 40,
        pressure: 60,
        timestamp: new Date("2023-01-01T14:00:00.000Z"),
        urination: false,
        patientCondition: true,
      },
      {
        humidity: 36,
        temperature: 25,
        pressure: 10,
        timestamp: new Date("2023-01-01T15:00:00.000Z"),
        urination: true,
        patientCondition: false,
      },
      {
        humidity: 34,
        temperature: 20,
        pressure: 20,
        timestamp: new Date("2023-01-01T16:00:00.000Z"),
        urination: false,
        patientCondition: true,
      },
      {
        humidity: 30,
        temperature: 88,
        pressure: 5,
        timestamp: new Date("2023-01-01T17:00:00.000Z"),
        urination: false,
        patientCondition: false,
      },
    ],
    pieChartData: [
      { category: "Male", value: 45 },
      { category: "Female", value: 55 },
    ],
  },
];

