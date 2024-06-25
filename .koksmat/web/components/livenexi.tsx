/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ScqdtgGOuTD
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";

export default function LiveNexi() {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <h1 className="text-2xl font-bold">Town Hall Meeting</h1>
      </header>
      <div className="flex-1 grid grid-cols-[3fr_1fr]">
        <div className="relative">
          <iframe
            src="https://www.23video.com/embed/123456789"
            className="w-full h-full"
            title="Live Video Feed"
          />
        </div>
        <div className="bg-background border-l">
          <div className="h-full flex flex-col">
            <div className="bg-muted p-4 border-b">
              <h2 className="text-lg font-semibold">Slido</h2>
            </div>
            <div className="flex-1 overflow-auto p-4">
              <div className="space-y-4">
                <div>
                  <h3 className="text-base font-medium">Ask a question</h3>
                  <textarea
                    placeholder="Type your question here..."
                    className="w-full border rounded-md p-2 mt-2"
                  />
                  <div className="flex justify-end mt-2">
                    <Button>Submit</Button>
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-medium">Top Questions</h3>
                  <div className="space-y-2 mt-2">
                    <div className="bg-muted rounded-md p-3">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">
                          What is the company's plan for expansion?
                        </p>
                        <div className="flex items-center gap-2">
                          <Button size="icon" variant="ghost">
                            <ThumbsUpIcon className="w-5 h-5" />
                          </Button>
                          <span className="text-sm text-muted-foreground">
                            42
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-muted rounded-md p-3">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">
                          How will the new product features benefit customers?
                        </p>
                        <div className="flex items-center gap-2">
                          <Button size="icon" variant="ghost">
                            <ThumbsUpIcon className="w-5 h-5" />
                          </Button>
                          <span className="text-sm text-muted-foreground">
                            28
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-muted rounded-md p-3">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">
                          What is the timeline for the upcoming product release?
                        </p>
                        <div className="flex items-center gap-2">
                          <Button size="icon" variant="ghost">
                            <ThumbsUpIcon className="w-5 h-5" />
                          </Button>
                          <span className="text-sm text-muted-foreground">
                            19
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ThumbsUpIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  );
}
