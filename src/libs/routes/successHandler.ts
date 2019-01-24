export default function successHandler(status:string, message: string, data: any) {
  return { status: status, message: message, data: data };
}
