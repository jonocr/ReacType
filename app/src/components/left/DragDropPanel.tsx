import React, { useState, useCallback, useContext, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import StateContext from '../../context/context';
import HTMLItem from './HTMLItem';
import { makeStyles } from '@material-ui/core/styles';

/*
DESCRIPTION: This is the bottom half of the left panel, starting from the 'HTML
  Elements' header. The boxes containing each HTML element are rendered in
  HTMLItem, which itself is rendered by this component.

Central state contains all available HTML elements (stored in the HTMLTypes property).
  The data for HTMLTypes is stored in HTMLTypes.tsx and is added to central state in
  initialState.tsx.

Hook state:
  -tag: 
*/

const DragDropPanel = (props): JSX.Element => {
  // const classes = useStyles();
  const [state, dispatch] = useContext(StateContext);
  const {isThemeLight} = props;

  // const useStyles = makeStyles({
  //   lightThemeFontColor: {
  //     color: '#186BB4'
  //   },
  //   darkThemeFontColor: {
  //     color: '#ffffff'
  //   },
  // });

  const handleDelete = (id: number): void => {
    dispatch({
      type: 'DELETE ELEMENT',
      payload: id
    });
  };
  
  // filter out separator so that it will not appear on the html panel
  const htmlTypesToRender = state.HTMLTypes.filter(type => type.name !== 'separator');
  console.log('Types', htmlTypesToRender)
  return (
    <div className="HTMLItems">
      <div id="HTMLItemsTopHalf">
        <Grid
            id="HTMLItemsGrid"
          >
            {htmlTypesToRender.map(option => (
              <HTMLItem
                name={option.name}
                key={`html-${option.name}`}
                id={option.id}
                Icon={option.icon}
                handleDelete={handleDelete}
                isThemeLight={isThemeLight}
              />
            ))}
          </Grid>
      </div>
    </div>
  );
};

export default DragDropPanel;
