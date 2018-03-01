import { bindWebsocket, publish as parentPublish } from '@clickr/common/lib/websocket'
import { BATTERY_REQUEST } from '@clickr/common/lib/websocket/message-types'
import { get as getSetting, getState as settings } from '../settings'
import { STUDENT } from '@clickr/common/lib/websocket/namespaces'

export function bind(dispatch, uri) {
  bindWebsocket(dispatch, uri, [BATTERY_REQUEST], STUDENT)
}

export function publish(type, payload, state, number) {
  const deviceId = getSetting(settings(state), 'deviceId') + '.' + number
  const deviceType = 'tablet'
  parentPublish(type, {
    ...payload,
    deviceType,
    deviceId,
  })
}