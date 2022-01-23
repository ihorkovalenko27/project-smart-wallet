import SimpleBar from 'simplebar-react';

import Button from "../Button";
import Form from "../Form";
import { BalanseWrrap, BtnWrap, CategoryWrrap, DateWrrap, DescrDateWrrap, DescrWrrap, ImgDel, ImgDelWrrap, Item, List, SumWrrap, TransactionWrrap } from "./TransactionMobile.styled";
import { DATA } from "../ExpenseIncome/ExpenseIncome";
import delSrc from '../../../images/delete.svg'
import { Balance } from '../..';

const TransactionMobile = ({ type, transactions, handleDelete, dateFinder }) => {
    console.log(transactions,type, handleDelete, dateFinder);
return (
    <>
        <BalanseWrrap><Balance></Balance></BalanseWrrap>
        {/* <Form
            dateFinder={dateFinder}
            type={transactionType}
        /> */}
        <TransactionWrrap>
            <SimpleBar style={{ maxHeight: 225 }}>
                <List >
                    {transactions.map((trans) => (
                        <Item >
                            <DescrDateWrrap>
                                <DescrWrrap>{trans.description}</DescrWrrap>
                                <DateWrrap>{trans.date}</DateWrrap>
                            </DescrDateWrrap>
                            <CategoryWrrap>{trans.category}</CategoryWrrap>
                            <SumWrrap>{trans.sum}</SumWrrap>
                            <ImgDelWrrap>
                                <ImgDel
                                    src={delSrc}
                                    onClick={() => handleDelete(trans, type)}
                                >
                                </ImgDel>
                            </ImgDelWrrap>
                        </Item>
                    ))}
                    
                </List>
            </SimpleBar>
        </TransactionWrrap>
        <BtnWrap>
            <Button
                text='расход'
                marginButton='0 2px 0 0'
                widthButton='159'
                heightButton='53'
                borderRadius='0'
                backgroundColor='var(--bg-color)'
            />
            <Button
                text='доход'
                marginButton='0'
                widthButton='159'
                heightButton='53'
                borderRadius='0'
                backgroundColor='var(--bg-color)'
            />
        </BtnWrap>
    </>
    );
};

export default TransactionMobile;