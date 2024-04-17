export interface Patient {
    date: Date
    admitted?: number;
    treatment?: number;
    recovered?: number;
  }
  
  export interface DataItem {
    humidity?: number;
    temperature?: number;
    pressure?: number;
    timestamp?: Date;
    urination?: boolean;
    patientCondition?: boolean;
  }
  
  export interface PieChartData {
    category: string;
    value: number;
  }
  export interface AreaChartDate {
    timestamp:Date,
    temperature:number
  }