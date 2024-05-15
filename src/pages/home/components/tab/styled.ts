import { Calendar } from 'primereact/calendar';
import { MultiSelect } from 'primereact/multiselect';
import styled from 'styled-components';

export const TabMenuStyledWrapper = styled.div`
  .p-tabmenu .p-tabmenu-nav .p-tabmenuitem.p-highlight .p-menuitem-link {
    border-color: #fb9c23;
    color: #fb9c23;
  }
`;

export const MultiSelectStyled = styled(MultiSelect)`
  border-top: none;
  border-right: none;
  border-left: none;

  border-radius: 2px;
`;

export const InputCalendar = styled(Calendar)`
  border-bottom: 1px solid #fb9c23;
  width: 100%;
  input {
    padding: 10px;

    border: none;
    border-radius: 2px;

    background: #fff7ed;
    box-shadow: none;

    transition: all 0.3;

    &:focus {
      border-bottom: 2px solid #222;
    }
  }
`;
