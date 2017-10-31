import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const GridListFixter = (props) => {

    let tiles = props.tilesData.map((tile) => (
        <GridTile
            key={tile.value}
            title={tile.title}
            onClick={()=>props.onClick(tile)}
            subtitle={<span><b>{tile.subtitle}</b></span>}
            actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
            style={styles.gridTile}
        >
            <img src={tile.img} />
        </GridTile>
    ));
    return (
        <div>
            <GridList
                {... props.gridListProps}
            >
                <Subheader>{props.subheader}</Subheader>
                {tiles}
            </GridList>
        </div>
    );
};

const styles = {
    gridTile :{
        cursor: 'pointer'
    }
};

export default GridListFixter;