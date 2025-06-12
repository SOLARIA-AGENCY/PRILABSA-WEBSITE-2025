import { Handler } from '@netlify/functions'
import { readFileSync, existsSync } from 'fs'
import path from 'path'

/**
 * Netlify Function: deploy-status
 * Returns the latest deployment report as JSON
 * Accessible via: /.netlify/functions/deploy-status
 * Redirect configured to: /api/v1/deploy-status
 */

export const handler: Handler = async () => {
  try {
    const filePath = path.join(process.cwd(), 'deployment-report.json')

    const baseHeaders = {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*'
    } as const

    if (!existsSync(filePath)) {
      return {
        statusCode: 404,
        headers: baseHeaders,
        body: JSON.stringify({ error: 'Deployment report not found' })
      }
    }

    const data = readFileSync(filePath, 'utf-8')
    return {
      statusCode: 200,
      headers: baseHeaders,
      body: data
    }
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ error: 'Failed to read deployment report', details: String(error) })
    }
  }
} 