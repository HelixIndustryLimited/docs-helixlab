// "use client";
// import { WeatherSearchToolUI } from "@site/src/components/tools/weather-tool";
// import { GeocodeLocationToolUI } from "@site/src/components/tools/weather-tool";
// import {
//   CompositeAttachmentAdapter,
//   SimpleImageAttachmentAdapter,
//   SimpleTextAttachmentAdapter,
//   AssistantRuntimeProvider,
//   WebSpeechSynthesisAdapter,
//   AssistantCloud,
// } from "@assistant-ui/react";
// import { useChatRuntime } from "@assistant-ui/react-ai-sdk";

// export function DocsRuntimeProvider({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const assistantCloud = new AssistantCloud({
//     baseUrl: "https://proj-0nm03h1ati45.assistant-api.com",
//     anonymous: true,
//   });

//   const runtime = useChatRuntime({
//     api: "api/chat",
//     adapters: {
//       attachments: new CompositeAttachmentAdapter([
//         new SimpleImageAttachmentAdapter(),
//         new SimpleTextAttachmentAdapter(),
//       ]),
//       speech: new WebSpeechSynthesisAdapter(),
//     },
//     cloud: assistantCloud,
//   });
//   return (
//     <AssistantRuntimeProvider runtime={runtime}>
//       {children}
//       <WeatherSearchToolUI />
//       <GeocodeLocationToolUI />
//     </AssistantRuntimeProvider>
//   );
// }

"use client";

import { useChat } from "@ai-sdk/react";
import { AssistantRuntimeProvider } from "@assistant-ui/react";
import { useChatRuntime } from "@assistant-ui/react-ai-sdk";

export function MyRuntimeProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const runtime = useChatRuntime({
    api: "/api/chat",
  });

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      {children}
    </AssistantRuntimeProvider>
  );
}