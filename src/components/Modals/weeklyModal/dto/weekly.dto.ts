export class WeeklyDto {
    moduleTitle: string;
    streak: number;
    maxStreak: number;
    weeklyWatchTime: number;
    totalWatchTime: number;
    open: boolean;
    handleClose: () => void;

    constructor(moduleTitle: string, streak: number, maxStreak: number, weeklyWatchTime: number, totalWatchTime: number, open: boolean, handleClose: () => void) {
        this.moduleTitle = moduleTitle;
        this.streak = streak;
        this.maxStreak = maxStreak;
        this.weeklyWatchTime = weeklyWatchTime;
        this.totalWatchTime = totalWatchTime;
        this.open = open;
        this.handleClose = handleClose;
    }
}
