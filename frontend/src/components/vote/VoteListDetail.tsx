import React, { useState } from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useQuery, QueryKey } from '@tanstack/react-query';
import { axiosFake } from '../../api/fake';

interface Item {
  id: string;
  title: string;
  completed: boolean;
}

const queryKey: QueryKey = ['dataList'];

export default function VoteListDetail() {
  const { data, isLoading, isError } = useQuery<Item[]>(queryKey, axiosFake);

  const completeState = (val: boolean) => {
    if (val) {
      return '마감';
    } else {
      return '진행중';
    }
  };

  return (
    <Wrapper>
      {/* {data?.map((item) => (
        <div key={item.id}>
          <h2>제목 : {item.title}</h2>
          {completeState(item.completed)}
        </div>
      ))} */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {data?.map((item) => (
            <Grid item xs={3} key={item.id}>
              <ItemList>
                <h2>제목 : {item.title}</h2>
                {completeState(item.completed)}
              </ItemList>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const ItemList = styled.div`
  text-align: center;
  padding: 5px;
  border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  height: 300px;
  cursor: pointer;
  margin-bottom: 40px;
`;
