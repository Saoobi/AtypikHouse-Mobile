import { NavigationActions, DrawerActions } from "react-navigation";

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
}

function goBack() {
  _navigator.dispatch(NavigationActions.back());
}

function closeDrawer() {
  _navigator.dispatch(DrawerActions.closeDrawer());
}

function openDrawer() {
  _navigator.dispatch(DrawerActions.openDrawer());
}

export default {
  closeDrawer,
  goBack,
  openDrawer,
  navigate,
  setTopLevelNavigator
};
