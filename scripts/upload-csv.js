#!/usr/bin/env node

/**
 * Upload CSV to Vercel Blob Storage
 * Usage: node scripts/upload-csv.js
 * 
 * Requires: VERCEL_BLOB_WRITE_TOKEN environment variable
 * Set it in: https://vercel.com/account/storage/blob/tokens
 */

import { put } from '@vercel/blob';
import fs from 'fs';
import path from 'path';

async function uploadCSV() {
  const token = process.env.VERCEL_BLOB_WRITE_TOKEN;
  
  if (!token) {
    console.error('❌ VERCEL_BLOB_WRITE_TOKEN not set');
    console.error('Set it in: https://vercel.com/account/storage/blob/tokens');
    process.exit(1);
  }

  const csvPath = path.join(process.cwd(), 'public/csv/arcana.csv');
  
  if (!fs.existsSync(csvPath)) {
    console.error(`❌ CSV file not found at: ${csvPath}`);
    process.exit(1);
  }

  try {
    const file = fs.readFileSync(csvPath);
    const filename = `arcana-${Date.now()}.csv`;

    console.log(`📤 Uploading ${filename}...`);
    
    const blob = await put(filename, file, {
      access: 'token',
      token,
    });

    console.log(`✅ Upload successful!`);
    console.log(`📍 URL: ${blob.url}`);
    console.log(`\nAdd this to your .env.local:`);
    console.log(`VERCEL_BLOB_READ_URL=${blob.url}`);
  } catch (error) {
    console.error('❌ Upload failed:', error);
    process.exit(1);
  }
}

uploadCSV();
