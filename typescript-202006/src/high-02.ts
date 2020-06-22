
/**
 * 枚举类型(Enum)
 * 
 */


enum Status {
  OFFLINE,
  ONLINE,
  DELETE,
}

enum NewStatus {
  OFFLINE,
  ONLINE = 7,
  DELETE,
}

function getResult(status) {
  if(status === Status.OFFLINE) {

  } else if(status === Status.ONLINE) {

  } else if(status === Status.DELETE) {

  }
}

getResult(2);


