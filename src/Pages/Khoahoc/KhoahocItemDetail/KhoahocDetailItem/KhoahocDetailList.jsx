import {useContext} from 'react'
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import {CurrentVideoContext} from '../../../../Pages/Khoahoc/KhoahocItemDetail/KhoahocItemDetail'

function renderRow(props) {
        const {index, style} = props;
        const {courseDetails, setCurVideo} = useContext(CurrentVideoContext);
        return (
                <ListItem style={style} key={index} component="div" disablePadding>
                        <ListItemButton onClick={() => {setCurVideo(courseDetails.videoList[index].url)}}>
                                <ListItemText primary={`Bài ${index+1}: ${courseDetails.videoList[index].title}`} />
                        </ListItemButton>
                </ListItem>
        )
}

export default function KhoahocDetailList() {
        const {courseDetails} = useContext(CurrentVideoContext)
        return (
                <Box
                sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}
            >
                <FixedSizeList
                    height={400}
                    width={360}
                    itemSize={46}
                    itemCount={courseDetails.videoList.length}
                    overscanCount={5}
                >
                    {renderRow}
                </FixedSizeList>
            </Box>
        )
}
