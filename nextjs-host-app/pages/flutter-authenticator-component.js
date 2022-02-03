
export default function FlutterAuthenticatorComponent({width, height, id}) {
  return (
    <iframe
        id={id}
        height={height ?? "100%"}
        width={width ?? "100%"}
        src="/flutter-authenticator/flutter-authenticator-component.html">
  </iframe>  
  )
}
