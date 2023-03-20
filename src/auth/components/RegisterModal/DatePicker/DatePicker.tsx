import * as React from 'react';
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker as Picker } from '@mui/x-date-pickers/DatePicker';

type Props = {
  onDateChange: (date: string) => void;
};

const DatePicker: React.FC<Props> = ({ onDateChange }) => {
  const [value, setValue] = React.useState<Dayjs | null>(null);

  const handleDateChange = (newValue: Dayjs | null) => {
    setValue(newValue);

    onDateChange(newValue!.format('DD/MM/YYYY'));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Picker
        label='Date of birth'
        value={value}
        onChange={(newValue) => handleDateChange(newValue)}
        // renderInput={(params: any) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;
