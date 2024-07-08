import { GlobalContext, useGlobalState } from './hooks/context-hooks';
import { IgrButton, IgrButtonModule, IgrCombo, IgrComboModule, IgrIconButton, IgrIconButtonModule, IgrNavbar, IgrNavbarModule, IgrRipple, IgrRippleModule } from '@infragistics/igniteui-react';
import { IgrColumn, IgrGrid, IgrGridBaseDirective, IgrGridModule, IgrRowSelectionEventArgs } from '@infragistics/igniteui-react-grids';
import { useGetCustomerDtoList, useGetOrderDetailDtoList, useGetOrderDtoList } from './hooks/data-source1-hooks';
import { CustomerDto } from './models/DataSource1/customer-dto';
import { OrderDto } from './models/DataSource1/order-dto';
import { useNavigate } from 'react-router-dom';
import '@infragistics/igniteui-react-grids/grids';
import styles from './app.module.css';
import createClassTransformer from './style-utils';

IgrButtonModule.register();
IgrComboModule.register();
IgrGridModule.register();
IgrIconButtonModule.register();
IgrNavbarModule.register();
IgrRippleModule.register();

export default function App() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const navigate = useNavigate();
  const _initializedDataWithCustomer: CustomerDto[] = [];
  const { globalState, setGlobalState } = useGlobalState();
  const { dataSource1CustomerDto: initializedFromDS } = useGetCustomerDtoList();
  const { dataSource1OrderDto } = useGetOrderDtoList(globalState.selectCustomer?.customerId as any);
  const { dataSource1OrderDetailDto } = useGetOrderDetailDtoList(globalState.selectOrder?.orderId as any);

  function singleSelectComboChange(_: IgrCombo, event: any) {
    setGlobalState(prevState => ({...prevState, selectCustomer: event.detail.newValue[0] as CustomerDto}));
  }

  function gridRowSelectionChanging(_: IgrGridBaseDirective, event: IgrRowSelectionEventArgs) {
    setGlobalState(prevState => ({...prevState, selectOrder: event.detail.newSelection[0] as OrderDto}));
  }

  return (
    <GlobalContext.Provider value ={{ globalState, setGlobalState}}>
      <div className={classes("column-layout customer-management-container")}>
        <div className={classes("column-layout group")}>
          <IgrNavbar className={classes("navbar")}>
            <div style={{display: 'contents'}} slot="start" key={uuid()}>
              <IgrIconButton variant="flat">
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>menu</span>
                </span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrIconButton>
            </div>
            <div className={classes("row-layout group_1")} key={uuid()}>
              <h6 className={classes("h6")}>
                <span>Screen Title</span>
              </h6>
            </div>
            <div style={{display: 'contents'}} slot="end" key={uuid()}>
              <IgrIconButton variant="flat">
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>search</span>
                </span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrIconButton>
            </div>
            <div style={{display: 'contents'}} slot="end" key={uuid()}>
              <IgrIconButton variant="flat">
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>favorite</span>
                </span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrIconButton>
            </div>
            <div style={{display: 'contents'}} slot="end" key={uuid()}>
              <IgrIconButton variant="flat">
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>more_vert</span>
                </span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrIconButton>
            </div>
          </IgrNavbar>
          <div className={classes("row-layout group_2")}>
            <IgrButton size="large" clicked={() => navigate(`/login`)} className={classes("button")}>
              <span key={uuid()}>Login デモ</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton size="large" clicked={() => navigate(`/grid-crud`)} className={classes("button")}>
              <span key={uuid()}>CRUD デモ</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton size="large" clicked={() => navigate(`/stteper`)} className={classes("button")}>
              <span key={uuid()}>Stteper デモ</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton size="large" clicked={() => navigate(`/card`)} className={classes("button")}>
              <span key={uuid()}>Card デモ</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
          </div>
          <IgrCombo outlined="true" data={initializedFromDS} label="顧客選択" displayKey="customerId" singleSelect="true" change={(s, event) => singleSelectComboChange(s, event)} className={classes("single-select-combo")}></IgrCombo>
        </div>
        <div className={classes("row-layout group_3")}>
          <div className={classes("column-layout group_4")}>
            <h5 className={classes("h5")}>
              <span>顧客注文（Customer Orders）</span>
            </h5>
            <IgrGrid data={dataSource1OrderDto} primaryKey="orderId" displayDensity="cosy" rowSelection="single" allowFiltering="true" filterMode="excelStyleFilter" height="800px" rowSelectionChanging={(s, event) => gridRowSelectionChanging(s, event)} className={classes("ig-typography ig-scrollbar grid")}>
              <IgrColumn field="orderId" dataType="number" header="orderId" sortable="true" selectable="false"></IgrColumn>
              <IgrColumn field="customerId" dataType="string" header="customerId" sortable="true" selectable="false"></IgrColumn>
              <IgrColumn field="employeeId" dataType="number" header="employeeId" sortable="true" selectable="false"></IgrColumn>
              <IgrColumn field="shipperId" dataType="number" header="shipperId" sortable="true" selectable="false"></IgrColumn>
              <IgrColumn field="orderDate" dataType="string" header="orderDate" sortable="true" selectable="false"></IgrColumn>
              <IgrColumn field="requiredDate" dataType="string" header="requiredDate" sortable="true" selectable="false"></IgrColumn>
              <IgrColumn field="shipVia" dataType="number" header="shipVia" sortable="true" selectable="false"></IgrColumn>
              <IgrColumn field="freight" dataType="number" header="freight" sortable="true" selectable="false"></IgrColumn>
              <IgrColumn field="shipName" dataType="string" header="shipName" sortable="true" selectable="false"></IgrColumn>
              <IgrColumn field="shipAddress.street" dataType="string" header="shipAddress street" sortable="true" selectable="false"></IgrColumn>
              <IgrColumn field="shipAddress.city" dataType="string" header="shipAddress city" sortable="true" selectable="false"></IgrColumn>
              <IgrColumn field="shipAddress.region" dataType="string" header="shipAddress region" sortable="true" selectable="false"></IgrColumn>
              <IgrColumn field="shipAddress.postalCode" dataType="string" header="shipAddress postalCode" sortable="true" selectable="false"></IgrColumn>
              <IgrColumn field="shipAddress.country" dataType="string" header="shipAddress country" sortable="true" selectable="false"></IgrColumn>
              <IgrColumn field="shipAddress.phone" dataType="string" header="shipAddress phone" sortable="true" selectable="false"></IgrColumn>
            </IgrGrid>
          </div>
          <div className={classes("column-layout group_4")}>
            <h5 className={classes("h5")}>
              <span>注文詳細（Order Details）</span>
            </h5>
            <IgrGrid data={dataSource1OrderDetailDto} primaryKey="orderId" displayDensity="cosy" allowFiltering="true" filterMode="excelStyleFilter" height="800px" className={classes("ig-typography ig-scrollbar grid")}>
              <IgrColumn field="orderId" dataType="number" header="orderId" sortable="true" selectable="false"></IgrColumn>
              <IgrColumn field="productId" dataType="number" header="productId" sortable="true" selectable="false"></IgrColumn>
              <IgrColumn field="unitPrice" dataType="number" header="unitPrice" sortable="true" selectable="false"></IgrColumn>
              <IgrColumn field="quantity" dataType="number" header="quantity" sortable="true" selectable="false"></IgrColumn>
              <IgrColumn field="discount" dataType="number" header="discount" sortable="true" selectable="false"></IgrColumn>
            </IgrGrid>
          </div>
        </div>
      </div>
    </GlobalContext.Provider>
  );
}
