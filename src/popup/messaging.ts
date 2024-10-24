import { EXTENSION_NAME } from "@/common/constants"
import { sendExtensionMessage } from "@common/messaging/extension"
import { MessageInternalCall } from "@common/types"

export async function makeInternalCall<T>({
  params,
  method,
}: Pick<MessageInternalCall, "method" | "params">): Promise<
  { success: true; data: T } | { success: false; message: string }
> {
  return await sendExtensionMessage({
    type: "internalCall",
    ext: EXTENSION_NAME,
    params: params,
    method: method,
  })
}
