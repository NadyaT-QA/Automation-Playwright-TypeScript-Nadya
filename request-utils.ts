//6 small, pure, typed functions: 


// id formatting,
export function formatId(id: number): string {
    return `ID-${id.toString().padStart(2, '0')}`;
}

// SLA calculation, 
export function calculateSLA(priority: number): number {
    if (priority === 1) return 24; // High priority: 24 hours
    if (priority === 2) return 72; // Medium priority: 72 hours
    return 168; // Low priority: 168 hours (1 week)
} 

//overdue check, 
export function isOverdue(elapsedHours: number, slaHours: number): boolean {
    return elapsedHours > slaHours;
}

// title validation (5–100 characters), 
export function validateTitle(title: string): boolean {
    return title.length >= 5 && title.length <= 100;
}

// category check against an allowed list, 
export function isCategoryAllowed(category: string, allowedCategories: string[]): boolean {
    return allowedCategories.includes(category);
}

// summary text
export function formatRequestSummary(id: number, title: string, status: string): string {
  return `[${formatId(id)}] ${title} — Status: ${status}`;
}