import { IgrButton, IgrButtonModule, IgrRipple, IgrRippleModule } from '@infragistics/igniteui-react';
import { IgrActionStrip, IgrActionStripModule, IgrColumn, IgrGrid, IgrGridBaseDirective, IgrGridEditDoneEventArgs, IgrGridEditingActions, IgrGridModule, IgrGridPinningActions, IgrPaginator, IgrRowDataEventArgs } from '@infragistics/igniteui-react-grids';
import { useGetEmployeeDtoList } from '../hooks/data-source1-hooks';
import { deleteCustomerDto, postCustomerDto, putCustomerDto } from '../services/data-source1';
import '@infragistics/igniteui-react-grids/grids';
import styles from './grid-crud.module.css';
import createClassTransformer from '../style-utils';

IgrActionStripModule.register();
IgrButtonModule.register();
IgrGridModule.register();
IgrRippleModule.register();

export default function GridCRUD() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const { requestDataSource1EmployeeDto, dataSource1EmployeeDto } = useGetEmployeeDtoList();

  function customersRowEditDone(_s: IgrGridBaseDirective, args: IgrGridEditDoneEventArgs) {
    if (!args.detail.isAddRow) {
      putCustomerDto(args.detail.rowData).then((res) => {
        if (res) {
          requestDataSource1EmployeeDto();
        } else {
          // TODO: handle error here!
        }
      });
    }
  }

  function customersRowDeleted(_s: IgrGridBaseDirective, args: IgrRowDataEventArgs) {
    deleteCustomerDto(args.detail.primaryKey).then((res) => {
      if (res) {
        requestDataSource1EmployeeDto();
      } else {
        // TODO: handle error here!
      }
    });
  }

  function customersRowAdded(_s: IgrGridBaseDirective, args: IgrRowDataEventArgs) {
    postCustomerDto(args.detail.data).then((res) => {
      if (res) {
        requestDataSource1EmployeeDto();
      } else {
        // TODO: handle error here!
      }
    });
  }

  return (
    <>
      <div className={classes("column-layout grid-crud-container")}>
        <div className={classes("column-layout group")}>
          <div className={classes("row-layout group_1")}>
            <IgrButton size="large" className={classes("button")}>
              <span key={uuid()}>home</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton size="large" className={classes("button_1 button_1_1")}>
              <span key={uuid()}>＋New</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton size="large" className={classes("button button_2")}>
              <span key={uuid()}>- Del</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <p className={classes("typography__body-1 text")}>
              <span>CRUD 操作は Grid インタラクション（Get, Post, Put, Delete）で提供しています。Grid 行にマウスホバーするとメニュー表示されます。Button からAPIコールしたい場合は別途コーディングが必要です。</span>
            </p>
          </div>
        </div>
        <div className={classes("column-layout group_2")}>
          <IgrGrid data={dataSource1EmployeeDto} primaryKey="employeeId" displayDensity="cosy" rowSelection="single" rowEditable="true" allowFiltering="true" filterMode="excelStyleFilter" rowEditDone={customersRowEditDone} rowDeleted={customersRowDeleted} rowAdded={customersRowAdded} className={classes("ig-typography ig-scrollbar grid")}>
            <IgrColumn field="employeeId" dataType="number" header="employeeId" editable="true" sortable="true"></IgrColumn>
            <IgrColumn field="lastName" dataType="string" header="lastName" editable="true" sortable="true"></IgrColumn>
            <IgrColumn field="firstName" dataType="string" header="firstName" editable="true" sortable="true"></IgrColumn>
            <IgrColumn field="title" dataType="string" header="title" editable="true" sortable="true"></IgrColumn>
            <IgrColumn field="titleOfCourtesy" dataType="string" header="titleOfCourtesy" editable="true" sortable="true"></IgrColumn>
            <IgrColumn field="birthDate" dataType="date" header="birthDate" editable="true" sortable="true"></IgrColumn>
            <IgrColumn field="hireDate" dataType="date" header="hireDate" editable="true" sortable="true"></IgrColumn>
            <IgrColumn field="addressId" dataType="string" header="addressId" editable="true" sortable="true"></IgrColumn>
            <IgrColumn field="address.street" dataType="string" header="address street" editable="true" sortable="true"></IgrColumn>
            <IgrColumn field="address.city" dataType="string" header="address city" editable="true" sortable="true"></IgrColumn>
            <IgrColumn field="address.region" dataType="string" header="address region" editable="true" sortable="true"></IgrColumn>
            <IgrColumn field="address.postalCode" dataType="string" header="address postalCode" editable="true" sortable="true"></IgrColumn>
            <IgrColumn field="address.country" dataType="string" header="address country" editable="true" sortable="true"></IgrColumn>
            <IgrColumn field="address.phone" dataType="string" header="address phone" editable="true" sortable="true"></IgrColumn>
            <IgrColumn field="notes" dataType="string" header="notes" editable="true" sortable="true"></IgrColumn>
            <IgrColumn field="avatarUrl" dataType="string" header="avatarUrl" editable="true" sortable="true"></IgrColumn>
            <IgrColumn field="reportsTo" dataType="number" header="reportsTo" editable="true" sortable="true"></IgrColumn>
            <IgrActionStrip>
              <IgrGridPinningActions></IgrGridPinningActions>
              <IgrGridEditingActions addRow="true"></IgrGridEditingActions>
            </IgrActionStrip>
            <IgrPaginator></IgrPaginator>
          </IgrGrid>
        </div>
      </div>
    </>
  );
}
