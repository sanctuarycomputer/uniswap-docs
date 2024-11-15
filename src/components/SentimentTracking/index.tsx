import { TraceEvent } from '@uniswap/analytics'
import { BrowserEvent, DocsSentiment, DocsSentimentSection, SharedEventName } from '@uniswap/analytics-events'
import React, { useCallback, useState } from 'react'
import { Happy, Sad, Neutral } from '../Icons'
import cn from 'classnames'

enum Sentiment {
  NEGATIVE = 'NEGATIVE',
  NEUTRAL = 'NEUTRAL',
  POSITIVE = 'POSITIVE',
}

export default function SentimentTracking({ analyticsSection }: { analyticsSection: DocsSentimentSection }) {
  const [selectedSentiment, setSelectedSentiment] = useState<null | Sentiment>(null)

  const isSentimentSelected = useCallback(
    (sentiment: Sentiment) => selectedSentiment && selectedSentiment === sentiment,
    [selectedSentiment],
  )

  return (
    <div className="flex flex-row space-x-4">
      <div className="Sentiment__question">Was this helpful?</div>
      <div className="flex flex-row space-x-1">
        <TraceEvent
          element={DocsSentiment.POSITIVE_SENTIMENT}
          name={SharedEventName.SENTIMENT_SUBMITTED}
          events={[BrowserEvent.onClick]}
          section={analyticsSection}
        >
          <button
            aria-label="Rate as positive"
            onClick={() => {
              setSelectedSentiment(Sentiment.POSITIVE)
            }}
            className={cn('group/happy', {
              selected: isSentimentSelected(Sentiment.POSITIVE),
            })}
          >
            <Happy className="h-5 w-5 group/happy" />
          </button>
        </TraceEvent>
        <TraceEvent
          element={DocsSentiment.NEUTRAL_SENTIMENT}
          name={SharedEventName.SENTIMENT_SUBMITTED}
          events={[BrowserEvent.onClick]}
          section={analyticsSection}
        >
          <button
            aria-label="Rate as neutral"
            onClick={() => {
              setSelectedSentiment(Sentiment.NEUTRAL)
            }}
            className={cn('group/neutral', {
              selected: isSentimentSelected(Sentiment.NEUTRAL),
            })}
          >
            <Neutral className="h-5 w-5" />
          </button>
        </TraceEvent>
        <TraceEvent
          element={DocsSentiment.NEGATIVE_SENTIMENT}
          name={SharedEventName.SENTIMENT_SUBMITTED}
          events={[BrowserEvent.onClick]}
          section={analyticsSection}
        >
          <button
            aria-label="Rate as negative"
            onClick={() => {
              setSelectedSentiment(Sentiment.NEGATIVE)
            }}
            className={cn('group/sad', {
              selected: isSentimentSelected(Sentiment.NEGATIVE),
            })}
          >
            <Sad className="h-5 w-5" />
          </button>
        </TraceEvent>
      </div>
    </div>
  )
}
