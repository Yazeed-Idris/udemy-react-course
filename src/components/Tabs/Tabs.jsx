export default function Tabs({children, buttons, ButtonsContainer = 'menu', ...props}) {

    return <>
    <ButtonsContainer {...props}>
        {buttons}
    </ButtonsContainer>
        {children}
    </>
}
