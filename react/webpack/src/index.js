import { format } from 'date-fns';
import { add } from './math';
import './index.css';

const container = document.querySelector('.container');
container.innerText = format(new Date(), 'dd/MM/yyyy');