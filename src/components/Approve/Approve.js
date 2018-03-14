import React from 'react'
import PropTypes from 'prop-types'
import { FormSection } from 'redux-form/immutable'
import { compose, defaultProps, setDisplayName, setPropTypes } from 'recompose'

import { withStyles } from 'material-ui/styles'
import { Done, Clear } from 'material-ui-icons'
import Grid from 'material-ui/Grid'
import Hidden from 'material-ui/Hidden'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

import TextField from 'components/TextField'

const styles = theme => ({
    right: {
        textAlign: 'right'
    }
})

const Item = ({ classes, index, uuid, name, period, vacationDays, onApprove, onDecline }) => (
    <FormSection className={ 'formRow' } name={ index.toString() }>
        <Grid container spacing={ 24 }>
            <Grid item xs={ 12 } sm={ 3 }><TextField label="Name" value={ name } /></Grid>
            <Grid item xs={ 6 } sm={ 4 }><TextField label="Zeitraum" value={ period }/></Grid>
            <Grid item xs={ 2 } sm={ 2 }><TextField label="Urlaubstage" value={ vacationDays } /></Grid>
            <Grid item xs={ 4 } sm={ 3 } className={ classes.right }>
                <Button type="button" onClick={ () => onDecline(uuid) } variant="fab" mini color="secondary" aria-label="decline"><Clear /></Button>
                <Button type="button" onClick={ () => onApprove(uuid) } variant="fab" mini color="primary" aria-label="approve"><Done /></Button>
            </Grid>
            <Hidden smUp>&nbsp;</Hidden>
        </Grid>
    </FormSection>
)

const Approve = ({ title, data, ...props }) => (
    <React.Fragment >
        <Typography variant="title" gutterBottom>{ title }</Typography>
        <form className={ 'form' }>
            { data.map(
                (itemData, index) => (<Item key={ itemData.uuid } index={ index } { ...props } { ...itemData } />)
            ) }
        </form>
    </React.Fragment>
)

export default compose(
    setDisplayName('Approve'),
    setPropTypes({
        title: PropTypes.string.isRequired,
        onApprove: PropTypes.func.isRequired,
        onDecline: PropTypes.func.isRequired,
        data: PropTypes.arrayOf(
            PropTypes.shape({
                uuid: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                period: PropTypes.string.isRequired,
                vacationDays: PropTypes.string.isRequired
            }).isRequired
        )
    }),
    defaultProps({
        title: '#Approve#',
        onApprove: f => f,
        onDecline: f => f
    }),
    withStyles(styles, { withTheme: true })
)(Approve)


