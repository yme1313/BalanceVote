import React, { useState} from 'react'
import styled from 'styled-components'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import VoteListDetail from './VoteListDetail';

export default function VoteList() {

  const [value, setValue] = useState<string>('1');

  const handleChange = (e: React.SyntheticEvent, newValue : string) => {
    setValue(newValue);
  };

  return (
    <Wrapper>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange}>
            <Tab label="전체" value="1" />
            <Tab label="진행중" value="2" />
            <Tab label="마감" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <VoteListDetail />
        </TabPanel>
        <TabPanel value="2">진행중리스트</TabPanel>
        <TabPanel value="3">마감리스트</TabPanel>
      </TabContext>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height : 800px;
  padding : 40px;
`;