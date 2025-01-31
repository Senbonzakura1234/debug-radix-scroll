// 'use client';

import * as ScrollArea from "@radix-ui/react-scroll-area";

type Props = Readonly<{
	children: React.ReactNode;
}>;

export default function ScrollWrapper({ children }: Props) {
	return (
		<ScrollArea.Root
			className="h-dvh w-dvw overflow-hidden bg-base-200 !antialiased"
			type="scroll"
		>
			<ScrollArea.Viewport className="relative size-full [&>div]:!flex [&>div]:h-full [&>div]:flex-col [&>div]:gap-6">
				{children}
			</ScrollArea.Viewport>

			<ScrollArea.Scrollbar
				className="group/scrollbar z-30 flex touch-none select-none bg-transparent p-0.5 data-[orientation=horizontal]:h-2 data-[orientation=vertical]:w-2 data-[orientation=horizontal]:flex-col"
				orientation="vertical"
			>
				<ScrollArea.Thumb className="relative flex-[1] rounded bg-base-content opacity-50 transition-opacity group-hover/scrollbar:opacity-100" />
			</ScrollArea.Scrollbar>
		</ScrollArea.Root>
	);
}
