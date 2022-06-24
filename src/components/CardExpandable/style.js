
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginBottom: 16,
    marginTop: 2,
    borderRadius: 5,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
    padding: 6,
    paddingRight: 0,
  },
  containerViewSaldoPeriodo: {
    backgroundColor: '#F5F5F5',
  },
  containerEmpresa: {
    width: '90%',
    marginHorizontal: '5%',
    marginBottom: 20,
  },
  containerIconeDown: {
    marginRight: 10,
  },
  containerOpcoesPeriodo: {
    backgroundColor: '#F5F5F5',
    marginTop: 8,
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerTextOpcoes: {
    width: '90%'
  },
  textOpcoesEmpresa: {
    fontFamily: 'Montserrat-Regular',
    color: '#757575',
    fontWeight: 'bold',
    fontSize: 14,
  },
  textOpcoesEmpresaSelect: {
    fontFamily: 'Montserrat-Regular',
    color: '#00A822',
    fontWeight: 'bold',
    fontSize: 14,
  },
  textSelectEmpresaSaldo: {
    fontFamily: 'Montserrat-Regular',
    color: '#00A822',
    fontSize: 14,
  },
  containerSelectEmpresa: {
    backgroundColor: '#F5F5F5',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 5,
  },
  containerItem: {
    padding: 16,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
  collapseItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    justifyContent: 'space-between'
  },
  badgeBlue: {
    marginLeft: 10,
    height: 20,
    width: 20,
    backgroundColor: '#00A822',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  badgeText: {
    fontSize: 10,
    color: '#fff',
  },
  containerLoading: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerSelectDate: {
    flexDirection: 'row',
    paddingVertical: 16,
    alignItems: 'center',
  },
  date: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});