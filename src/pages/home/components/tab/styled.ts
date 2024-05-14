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
