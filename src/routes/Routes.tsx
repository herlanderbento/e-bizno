import { ComponentType } from "react";
import { Redirect, Route as RouteRRD, RouteProps } from "react-router-dom";
import { useAuth } from "hooks/useAuth";

interface IProps extends RouteProps {
  isPrivate?: Boolean;
  component: ComponentType;
}

function Route({ isPrivate = false, component: Component, ...rest }: IProps) {
  const { user } = useAuth();
  return (
    <RouteRRD
      {...rest}
      render={({ location }) => {
        return isPrivate === (user !== undefined) ? (
          isPrivate === false ? <Component /> : <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? "/" : "perfil",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
}
export default Route;